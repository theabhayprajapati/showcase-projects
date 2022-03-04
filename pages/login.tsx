import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const LoginPage = () => {
    const {data:session}:any = useSession()
    const router = useRouter()
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
                <button onClick={() =>router.push('/admin')}>
                  To to admin dashboard
                </button>
            </div>

        }
    </div>
  )
}

export default LoginPage