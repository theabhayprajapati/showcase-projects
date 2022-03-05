import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="font-Monserat">
      <Head>
        <title>Branchex | The Only Link you'll Need</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-[100%] relative min-h-screen '>
        <div className='absolute grid place-items-center w-full  h-full'>
          <div className=' grid place-items-center gap-3 '>
            <h2 className='md:text-9xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-purple-600 text-3xl font-bold text-center '>
              The Only Link You’ll Ever Need
            </h2>
            <p>Connect audiences to all of your content with just one link</p>
            <button>
              Get Started
            </button>
            <div className='rounded-full border-blue-300 border flex p-3'>
              <h1>
                branchex/
              </h1>
              <input className='outline-none' type="text" placeholder="yournamehere" />
            </div>
          </div>
        </div>
      </main>
      <main className='w-[100%] min-h-screen relative p-5'>
        <div className='max-w-4xl  border  mx-auto rounded-2xl p-5 h-[70%] shadow-2xl'>
          <h2 className='md:text-5xl text-3xl font-bold text-black'>
            Created by us
          </h2>
          <h2 className='md:text-5xl text-3xl font-bold text-black'>
            Powered by your Projects.
          </h2>

        </div>
      </main>




    </div>
  )
}

export default Home
