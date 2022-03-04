import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { db } from '../firebase'

const LoginPage = () => {
    const { data: session }: any = useSession()
    const router = useRouter()


    const username = session && session.user.username
    const createAccount = async () => {
        const userRef = doc(db, "user", username)
        await setDoc(userRef, {
            name: session.user.name,
            email: session.user.email,
            username: session.user.username,
            avatar: session.user.image,
            createAt: serverTimestamp()
        })
        console.log("createAccount")
        router.push('/admin')
    }

    return (
        <div>
            {
                !session ? <div>
                    <h1>Login Page</h1>
                    <button onClick={() => signIn()}>
                        sign In
                    </button>
                </div>
                    : <div>

                        <h1>Login Page</h1>
                        <button onClick={() => signOut()}>
                            sign Out
                        </button>
                        <h1> Loggedd in as
                            {session.user.username}
                        </h1>
                        <h1>
                            your user name is {session.user.username}
                        </h1>
                        <button onClick={() => createAccount()}>
                            To to admin dashboard
                        </button>
                    </div>

            }
        </div>
    )
}

export default LoginPage