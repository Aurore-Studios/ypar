import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout>
        <div className='lg:px-16 md:px-8 px-4 pt-16'>
          <div className='flex items-center'>
            <div className='flex-1'>
              <p className='leading-tight text-5xl font-bold'>Welcome to <span className='text-pink-500'>WWMS NOW</span>, the place for everything WWMS.</p>
              <div className='flex items-center text-2xl mt-4 font-medium'>
                <Link href='/login'>
                  <div className='shadow-[0px_4px_0px_0px_#ec489990] hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50 transition border border-pink-500 p-3 py-2 rounded-full text-pink-500'>
                    Log in to WWMS NOW
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex-1'>

            </div>
          </div>
          <hr className='my-8 border-slate-300' />
          <p className='font-medium text-2xl'>Latest</p>
        </div>
      </Layout>
    </>
  )
}
