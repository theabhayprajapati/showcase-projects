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
                    <section className='min-w-full min-h-screen relative font-Monserat '>
                        <div className='max-w-3xl mx-auto w-full  absolute top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] '>
                            <div className='items-center border-2 grid place-items-center gap-3  '>
                                <h1 className='text-3xl font-medium '>
                                    Join branchesx Today.
                                </h1>
                                <div>
                                    <button className='py-1 px-6 border-2 border-purple-500 rounded-full' onClick={() => signIn()}>
                                        Continue with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                    : <div>


                        <section className='min-w-full min-h-screen relative font-Monserat '>
                            <div className='max-w-3xl mx-auto w-full  absolute top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] '>
                                <div className='items-center border-2 grid place-items-center gap-3  '>
                                    <h1 className='text-3xl font-medium '>
                                        Welcome {session.user.name}
                                    </h1>
                                    <div>
                                       <button onClick={() => router.push('/admin')}>
                                           Continue to dashboard.
                                       </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>

            }
                    </div>
    )
}

            export default LoginPage