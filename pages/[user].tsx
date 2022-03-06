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

    const fetchProject = async (username: any) => {
      const ProjectRef = collection(db, "user", username, "projects")

      onSnapshot(ProjectRef, (snapshot: any) => setUserProjects(snapshot.docs))
    }
    username && fetchProject(username)
  }, [username])
  console.log(userData, "SERVER DATA")
  console.log(userData.avatar || userData.profile_image_url, "hti si ssdavaura")




  return (

    <div className='font-Monserat min-w-full min-h-screen bg-stone-700'>
      {
        !userData ? <div>
          <h1>User Page</h1>
          <h1>
            {user}
          </h1>
        </div>
          :
          <div className="max-w-xl h-full  mx-auto flex flex-col items-center  p-10">
            <div className="" tabIndex={0}>
              <img src={userData.avatar} alt="Abhay Prajapati" className="h-20 w-20 rounded-full ring ring-gray-600" />
            </div>
            <button className="font-semibold rounded-lg">
              {userData.name}
            </button>
            <button className='text-lg text-gray-600'>
              @{userData.username}
            </button>
            <h2 className='flex'>
              <button className='nametitle text-gray-700 hover:text-gray-600 focus:text-black rounded-lg' onClick={() => router.push('https://nextjs.org/')}>Next JS </button>{''} / <button className='nametitle hover:text-yellow-500 focus:text-yellow-500 rounded-lg' onClick={() => router.push('https://firebase.google.com/')}> Firebase</button>
            </h2>





            <div className="md:flex items-center mt-2 md:text-2xl space-x-2  text-sm ">
              <button className='nametitle bg-blue-400 px-2 text-white rounded-lg' onClick={() => router.push('https://twitter.com/AbhayPrajapati_')}>Twitter</button>


              <button className='nametitle bg-gradient-to-r from-pink-400 to-orange-300 px-2 text-white rounded-lg' onClick={() => router.push('https://')}>Instagram</button>


              <button className='nametitle bg-green-700 px-2 text-white rounded-lg' onClick={() => router.push('https://github.com/theabhayprajapati/')}>Github</button>


              <button className='nametitle bg-[#0e76a8] px-2 text-white rounded-lg' onClick={() => router.push('https://www.linkedin.com/in/abhayprajaapati/')}>LinkedIn</button>
            </div>



            <div className='grid grid-cols-1 w-full mt-10 gap-y-5'>
              {
                userProjects && userProjects.map((project: any) => {
                  return (

                    <button key={project.id} onClick={() => router.push(project.data().link)} className='project-btn '>

                      <h1 className='font-bold text-lg'>
                        {project.data().projectname}
                        {/* //todo: Portfolio name */}
                      </h1>
                      <p className="text-base line-clamp-2">
                        {
                          project.data().note
                        }
                      </p>
                    </button>


                  )
                })
              }

            </div>

          </div>

      }
    </div>
  )
}

export default UserPage