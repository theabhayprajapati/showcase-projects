import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const UserPage = () => {
  const router = useRouter()
  console.log(router.query)
  const { user } = router.query
  const [userData, setuserData] = useState<any>({})
  const [userProjects, setUserProjects]: any = useState()
  console.log(user)
  const username = user
  useEffect(() => {
    console.log(user)
    // let ColRef = doc(db, "users", "theabhayprajapati")
    // console.log(username, "USERNAME")
    const userData = async (username: any) => {
      const docRef = doc(db, "user", "theabhayprajapati");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setuserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    username && userData(username)

    const fetchProject = async (username: any) => {
      const ProjectRef = collection(db, "user", username, "projects")

      onSnapshot(ProjectRef, (snapshot: any) => setUserProjects(snapshot.docs))
    }
    username && fetchProject(username)
  }, [username])
  console.log(userData, "SERVER DATA")
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
            <h1>User account</h1>

            <h1>
              {userData.name}
            </h1>
            <h1>
              {userData.screen_name}
            </h1>
            <h1>
              {userData.avatar}
            </h1>
            <section>
              {
                userProjects &&
                userProjects.map((project: any) => {
                  return (
                    <div key={project.id}>
                      <h1>{project.data().projectname}</h1>
                      <h1>{project.data().userposition}</h1>
                      <h1>{project.data().link}</h1>
                      <h1>{project.data().note}</h1>
                    </div>
                  )
                })
              }
            </section>
          </div>

      }
    </div>
  )
}

export default UserPage