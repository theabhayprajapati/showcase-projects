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
                    : 
                    <div>
                        
                    </div>
            }
        </div>
    )
}

export default AdminPage