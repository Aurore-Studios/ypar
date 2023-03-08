import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
          <div className="flex w-full lg:py-[30px] py-[0px]">
            <div className="mx-auto lg:w-[80%] md:w-3/4 text-center">
              <div className="flex flex-col">
                <p className="leading-tight lg:text-7xl md:text-6xl text-5xl font-bold">
                  Welcome to <span className="text-cyan-600">WWMS NOW</span>,
                  the place for everything WWMS.
                </p>
                <p className="mt-6 mb-4 lg:text-3xl md:text-2xl text-xl text-slate-600 lg:leading-[40px] md:leading-[35px] leading-[30px]">
                  This is a place to catch up with everything going on in
                  Woodrow. Check out{" "}
                  <span className="text-slate-900">game footage</span>,{" "}
                  <span className="text-slate-900">interviews</span>,{" "}
                  <span className="text-slate-900">
                    videos from school dances
                  </span>
                  , and even more.
                </p>
                <div className="mx-auto flex items-center text-2xl mt-4 font-medium">
                  <div
                    className="hover:cursor-pointer shadow-[0px_4px_0px_0px_#0891b290] hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-500/20 transition border border-cyan-600 p-3 py-2 rounded-full text-cyan-600"
                    onClick={() => signIn("google")}
                  >
                    Sign up{" "}
                    <span className="lg:inline-flex md:inline-flex hidden">
                      for WWMS NOW
                    </span>
                  </div>
                  <div
                    className="ml-4 hover:cursor-pointer shadow-[0px_4px_0px_0px_#64748b90] hover:border-slate-600 hover:text-slate-600 hover:bg-slate-500/20 transition border border-slate-600 p-3 py-2 rounded-full text-slate-600"
                    onClick={() => signIn("google")}
                  >
                    Log in{" "}
                    <span className="lg:inline-flex md:inline-flex hidden">
                      to WWMS NOW
                    </span>
                  </div>
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
