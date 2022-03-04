import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
const initialValues = {
    projectname: "",
    userposition: "",
    link: "",
    note: "",
};
const AdminPage = () => {
    const { data: session }: any = useSession()
    session && console.log(session)
    const [addProject, setaddProject]:any = useState()
    const username = session && session.user.username
    const [userData, setuserData] = useState<any>({})

    useEffect(() => {

        const userData = async (username: any) => {
            onSnapshot(doc(db, "user", username), (doc) => {
                const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
                setuserData(doc.data());
            })
        }
        username && userData(username)
        const fetchProject = async (username: any) => {
            onSnapshot(collection(db, 'user', username, 'projects'), (snapshot: any) => {
                setaddProject(snapshot.docs)
            })
        }
        username && fetchProject(username)
    }, [session])
    console.log(userData)
    const [descroption, setdescroption] = useState('')
    const addDescriptions = async () => {
        await setDoc(doc(db, "user", username), {
            description: descroption
        })
        setdescroption('')
    }
    const [values, setValues] = useState(initialValues)
    const handleInputChange = (e: any) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const addProjectsDB = async (username: any, e: any) => {
        const ProjectRef = collection(db, "user", username, "projects")
        await addDoc(ProjectRef, {
            projectname: values.projectname,
            userposition: values.userposition,
            link: values.link,
            note: values.note,
        })
        e.preventDefault()
        setValues(initialValues)
    }

    const deleteuserProject = (projectname: any) => {
        console.log(projectname)
        const ProjectRef = doc(db, "user", username, "projects", projectname)
        // let docRef = (ProjectRef)
        deleteDoc(ProjectRef)
    }

    const [showaddProject, setshowaddProject] = useState(false)
    console.log(showaddProject, "showaddProject")
    console.log(values, "values")
    return (
        <div>
            {
                !session ? <div>
                    <h1>Admin Page</h1>
                    <button onClick={() => signIn()}>
                        sign In
                    </button>
                </div>
                    : <div>
                        <h1>Admin Page</h1>
                        <button onClick={() => signOut()}>
                            sign Out
                        </button>
                        <main>
                            <h1>
                                {username}
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
                            {
                                userData && <h1>
                                    {userData.description}
                                </h1>
                            }
                        </main>
                        <section>
                            {!userData ? <h1>
                                Add description
                            </h1> : <h1>
                                Edit description
                            </h1>}
                            <input type="text" placeholder="Add desciprtion" value={descroption} onChange={(e: any) => setdescroption(e.target.value)} />
                            <button onClick={() => addDescriptions()}>
                                Add Descriptions
                            </button>
                        </section>
                        {
                            addProject && addProject.map((item: any) => {
                                return <div className='flex' key={item.id}>
                                    <h1>
                                        {item.data().projectname}
                                    </h1>
                                    <h1>

                                    </h1>
                                    <h1>
                                        {item.data().userposition}
                                    </h1>
                                    <h1>
                                        {item.data().link}
                                    </h1>
                                    <h1>

                                    </h1>
                                    <h1>
                                        {item.data().note}
                                    </h1>
                                    <button onClick={() => deleteuserProject(item.id)}>
                                        🥫
                                    </button>

                                </div>

                            })
                        }
                        <section>
                            { }
                            <h1>
                                Add Projects
                            </h1>
                            <button onClick={() => setshowaddProject(!showaddProject)}>
                                ➕
                            </button>
                            {
                                showaddProject && <form action="">
                                    <input type="text" value={values.projectname} onChange={(e: any) => handleInputChange(e)}
                                        name="projectname" aria-label='company' placeholder="Project Name"
                                    />
                                    <input type="text" value={values.note} onChange={(e: any) => handleInputChange(e)}
                                        name="note" aria-label='company' placeholder="Note"
                                    /><input type="text" value={values.link} onChange={(e: any) => handleInputChange(e)}
                                        name="link" aria-label='company' placeholder="Link"
                                    /><input type="text" value={values.userposition} onChange={(e: any) => handleInputChange(e)}
                                        name="userposition" aria-label='company' placeholder="User Position"
                                    />
                                    <button onClick={(e: any) => addProjectsDB(username, e)}>
                                        submit
                                    </button>
                                </form>
                            }
                        </section>
                    </div>
            }
        </div>
    )
}

export default AdminPage