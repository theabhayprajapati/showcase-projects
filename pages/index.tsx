import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Branchesx - A simple way to manage your projects
        </title>
      </Head>
      <main>
        <section className='min-w-full min-h-screen relative '>
          <div className='max-w-3xl mx-auto w-full  absolute border top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] '>
            <div className='items-center grid place-items-center gap-3  '>
              <h1 className='md:text-6xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-purple-600 text-6xl font-bold text-center '>
                The only link you will ever need.
              </h1>
              <button className='bg-black p-1 px-3 rounded-full text-white text-2xl'>
                Get Started
              </button>
              <div className='flex justify-center  border-purple-500 rounded-full px-2 py-1 items-center  text-xl'>
                <h1 className='text-center'>
                  branchesx/
                </h1>
                <input type="text" placeholder="yourusername" className="outline-none w-[50%] " />
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-full  min-h-screen p-3">
          <div className="max-w-3xl mx-auto   space-y-5 ">
            <div className="text-6xl font-bold  p-5 rounded-3xl shadow-xl">
              <h1>
                Create by us.
              </h1>
              <p>
                Powered by your projects.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className='text-7xl bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-400 py-20 md:py-32 font-bold  p-5 rounded-3xl shadow-xl'>
                  <h1 className='text-white'>
                    No fees.
                    Not even hidden ones.
                  </h1>
                </div>
                <div className='text-7xl py-20 bg-black md:py-32 font-bold  p-5 rounded-3xl shadow-xl'>
                  <h1 className='text-white'>
                    No limits in addin project ever.
                  </h1>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="min-w-full  min-h-[50vh] p-3">
          <div className="max-w-3xl mx-auto rounded-3xl bg-black items-center">
            <h1 className="py-10 md:py-32 text-6xl text-white font-bold  p-5 rounded-3xl shadow-xl">
              &lt;Built for <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-violet-400">
                Everyone
              </span>
              /&gt;
            </h1>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Index