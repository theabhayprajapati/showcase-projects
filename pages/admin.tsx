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
    const [addProject, setaddProject]: any = useState()
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
                    :
                    <div>
                        <main className='min-h-screen min-w-full border-2 rounded-md grid md:grid-cols-2 grid-cols-1'>
                            <section className='md:px-8 p-3'>
                                <h1 className='text-5xl font-extrabold border-b shadow-sm'>
                                    Control Center
                                </h1>
                                <h1 className='text-2xl font-medium text-gray-500 '>
                                    My link: /{username}
                                </h1>
                                <section className=''>
                                    <h1 className='text-3xl font-bold border-2 rounded-md'>
                                        Add Projects.
                                    </h1>
                                    <div className='p-1 border-2 rounded-md flex'>
                                        <div className='w-[90%]'>
                                            <form onSubmit={(e) => addProjectsDB(username, e)}>
                                                <div className='flex flex-col'>
                                                    <div className="flex gap-2">
                                                        <div className="">
                                                            <label className='text-sm font-semibold'>
                                                                Project Name
                                                            </label>
                                                            <input
                                                                autoComplete='off'
                                                                className='w-full p-1 border-2 rounded-md'
                                                                type='text'
                                                                name='projectname'
                                                                value={values.projectname}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className='text-sm font-semibold'>
                                                                Position
                                                            </label>
                                                            <input
                                                                autoComplete='off'
                                                                className='w-full p-1 border-2 rounded-md'
                                                                type='text'
                                                                name='userposition'
                                                                value={values.userposition}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <label className='text-sm font-semibold'>
                                                        Link
                                                    </label>
                                                    <input
                                                        autoComplete='off'
                                                        className='w-full p-1 border-2 rounded-md'
                                                        type='text'
                                                        name='link'
                                                        value={values.link}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label className='text-sm font-semibold'>
                                                        Note
                                                    </label>
                                                    <input
                                                        autoComplete='off'
                                                        className='w-full p-1 border-2 rounded-md'
                                                        type='text'
                                                        name='note'
                                                        value={values.note}
                                                        onChange={handleInputChange}
                                                    />
                                                    <button
                                                        className='w-full p-1 border-2 rounded-md'
                                                        type='submit'
                                                    >
                                                        Add Project
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='w-[10%]'>
                                            delete
                                            toggle show
                                        </div>
                                    </div>

                                </section>

                            </section>
                            {
                                session && <section>
                                    <iframe src={`http://localhost:3000/${username}`} allowFullScreen width='400' height='500' frameBorder="0"></iframe>
                                </section>
                            }
                        </main>
                    </div>
            }
        </div>
    )
}

export default AdminPage