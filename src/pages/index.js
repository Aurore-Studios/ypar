import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
          <div className="flex w-full py-[30px]">
            <div className='mx-auto lg:w-[80%] md:w-3/4 text-center'>
              <div className="flex flex-col">
                <p className="leading-tight text-7xl font-bold">
                  Welcome to <span className="text-cyan-600">WWMS NOW</span>, the
                  place for everything WWMS.
                </p>
                <p className='mt-6 mb-4 text-3xl text-slate-600 leading-[40px]'>
                  This is a place to catch up with everything going on in Woodrow. Check out <span className='text-slate-900'>game footage</span>, <span className='text-slate-900'>interviews</span>, <span className='text-slate-900'>videos from school dances</span>, and even more.
                </p>
                <div className="mx-auto flex items-center text-2xl mt-4 font-medium">
                  <Link href="/login">
                    <div className="shadow-[0px_4px_0px_0px_#0891b290] hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-500/20 transition border border-cyan-600 p-3 py-2 rounded-full text-cyan-600">
                      Log in to WWMS NOW
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8 border-slate-300" />
          <p className="font-medium text-2xl">Latest</p>
        </div>
      </Layout>
    </>
  );
}
