import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const AdminPage = () => {
    const { data: session }: any = useSession()
    session && console.log(session)
    const username = session && session.user.username
    const [userData, setuserData] = useState<any>({})

    useEffect(() => {
        console.log()
        // let ColRef = doc(db, "users", "theabhayprajapati")
        console.log(username, "USERNAME")
        const userData = async (username: any) => {
            onSnapshot(doc(db, "user", username), (doc) => {
                const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
                setuserData(doc.data());
            })

        }
        username && userData(username)
    }, [session])
    console.log(userData)
    const [descroption, setdescroption] = useState('')
    const addDescriptions = async () => {
        await setDoc(doc(db, "user", username), {
            description: descroption
        })
        setdescroption('')
    }
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
                            <h1>
                                {userData.description}
                            </h1>
                        </main>
                        <section>
                            <input type="text" placeholder="Add desciprtion" value={descroption} onChange={(e: any) => setdescroption(e.target.value)} />
                            <button onClick={() => addDescriptions()}>
                                Add Descriptions
                            </button>
                        </section>
                    </div>
            }
        </div>
    )
}

export default AdminPage