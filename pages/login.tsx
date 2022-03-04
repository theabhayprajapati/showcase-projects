import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
    const {data:session} = useSession()
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

            </div>

        }
    </div>
  )
}

export default LoginPage