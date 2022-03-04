import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const UserPage = () => {
  const router = useRouter()
  console.log(router.query)
  const { user } = router.query
  const [userData, setuserData] = useState<any>({})

  console.log(user)
  const username = user
  useEffect(() => {
    console.log(user)
    // let ColRef = doc(db, "users", "theabhayprajapati")
    console.log(username, "USERNAME")
    const userData = async (username: any) => {
      const docRef = doc(db, "user", username);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setuserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    username && userData(username)
  }, [router])
  console.log(userData, "userData")
  console.log(userData.avatar || userData.profile_image_url, "hti si ssdavaura")
  return (

    <div>
      {
        !userData ? <div>
          <h1>User Page</h1>
          <h1>
            {user}
          </h1>
        </div>

          : <div>
            <h1>User Page</h1>

            <h1>
              {user}
            </h1>
            <h1>
              {userData.name}
            </h1>
            <h1>
              {userData.screen_name}
            </h1>
            <h1>
              {userData.avatar}
            </h1>

          </div>

      }
    </div>
  )
}

export default UserPage