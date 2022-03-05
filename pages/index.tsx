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

      <main className='w-[100%] relative min-h-screen mx-auto'>
        <div className='absolute grid place-items-center w-full  h-full'>
          <div className=' grid place-items-center gap-3 '>
            <h2 className='md:text-8xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-purple-600 text-3xl font-bold text-center '>
              The Only Link You’ll Ever Need
            </h2>
            <p className='text-xl font-medium'>Share your all project in with a simple link.</p>
            <button className='bg-black p-3 px-6 rounded-full text-white text-2xl'>
              Get Started
            </button>
            <div className='rounded-full text-2xl border-purple-300 border flex px-6 py-3'>
              <h1 >
                branchex/
              </h1>
              <input className='outline-none placeholder:text-gray-400' type="text" placeholder="yournamehere " />
            </div>
          </div>
        </div>
      </main>
      <main className='w-[100%] min-h-screen relative p-5 space-y-3'>
        <div className='max-w-4xl  border  mx-auto rounded-3xl p-14  shadow-xl'>
          <h2 className='md:text-5xl text-5xl font-bold text-black pt-10'>
            Created by us.
          </h2>
          <h2 className='md:text-5xl text-5xl font-bold text-black'>
            Powered by your Projects.
          </h2>
        </div>
        <div className='max-w-4xl mx-auto gap-3 md:flex space-y-3 md:space-y-0'>
          <div className='  md:p-10  max-w-2xl mx-auto rounded-3xl p-5 shadow-xl bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400'>
            <h2 className='md:text-8xl text-8xl  font-bold text-white'>
              No fees. Not even hidden ones.
            </h2>
          </div>
          <div className=' md:p-10 max-w-2xl mx-auto rounded-3xl p-5 shadow-xl bg-black'>
            <h2 className='md:text-8xl text-5xl font-bold text-white'>
              No Limits in adding Projects.
            </h2>
            <p className='text-transparent bg-clip-text bg-gradient-to-tr break-words from-green-400  to-yellow-600 text-xl font-bold '>
              as mush as you wish.
            </p>
          </div>
        </div>
      </main>
      <main className='w-[100%] md:p-10 min-h-screen relative p-5 space-y-3'>
        <div className='max-w-4xl mx-auto '>
          <div className='max-w-4xl mx-auto rounded-3xl p-5 md:p-10 shadow-xl bg-gradient-to-br from-green-300 to-blue-400 '>
            <h2 className='md:text-8xl text-8xl md:mt-40 font-bold break-words text-white'>
              No limits in adding content.
            </h2>
          </div>
        </div>
        <div>
          <div className='max-w-4xl mx-auto rounded-3xl p-5 md:p-10 shadow-xl bg-black'>
            <h1 className='md:text-3xl text-sm text-transparent bg-gradient-to-l from-lime-500 to-green-500 bg-clip-text font-bold'>
              Brachesx
            </h1>
            <h1 className='md:text-8xl text-5xl md:mt-40  font-bold break-words text-white'>
              &lt;Build for {''}
              <span className='text-transparent bg-gradient-to-l from-fuchsia-600 to-purple-500 bg-clip-text'>
                Everyone
              </span>
              /&gt;
            </h1>
          </div>
        </div>
      </main>




    </div>
  )
}

export default Home
