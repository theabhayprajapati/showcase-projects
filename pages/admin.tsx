import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const AdminPage = () => {
    const {data:session} = useSession()
    session && console.log(session)
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

            </div>
        }
    </div>
  )
}

export default AdminPage