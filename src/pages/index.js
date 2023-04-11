import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight, faLock, faRocket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

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
                {!session ? (
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
                ) : (
                  <div className="mx-auto flex flex-wrap justify-center items-center text-2xl mt-4 font-medium">
                    <div
                      className="mt-2 hover:cursor-pointer shadow-[0px_4px_0px_0px_#0891b290] hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-500/20 transition border border-cyan-600 p-3 py-2 rounded-full text-cyan-600"
                      onClick={() => router.replace("/sports")}
                    >
                      Sports{" "}
                      <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </div>
                    <div
                      className="ml-2 mt-2 hover:cursor-pointer shadow-[0px_4px_0px_0px_#0891b290] hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-500/20 transition border border-cyan-600 p-3 py-2 rounded-full text-cyan-600"
                      onClick={() => router.replace("/events")}
                    >
                      Events{" "}
                      <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </div>
                    <div
                      className="ml-2 mt-2 hover:cursor-pointer shadow-[0px_4px_0px_0px_#0891b290] hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-500/20 transition border border-cyan-600 p-3 py-2 rounded-full text-cyan-600"
                      onClick={() => router.replace("/bookings")}
                    >
                      Book a ticket{" "}
                      <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr className="lg:my-8 my-16 border-slate-300" />
          <div className="lg:p-16 md:p-8">
            <p className="text-3xl font-medium leading-[45px]">
              <span className="bg-cyan-600 text-white p-1 px-2 rounded-lg font-semibold">
                WWMS NOW
              </span>{" "}
              is a <em>community-oriented website</em> to keep up with{" "}
              <span className="underline decoration-cyan-600 underline-offset-[10px] decoration-[4px]">
                everything
              </span>{" "}
              in Woodrow. From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-cyan-600">
                blog posts about sports games and dances
              </span>
              , to a revolutionary new way to purchase event tickets, we make
              Woodrow as fun as ever for everyone.
            </p>

            <div className='mt-16 flex items-center lg:flex-row md:flex-row flex-col'>
              <img src='/promo/sports.png' className='lg:w-[60%] md:w-[55%] w-full lg:ml-0 md:ml-0 mx-8 lg:mb-0 md:mb-0 mb-8 mr-8 flex-1 border border-slate-300 rounded-xl' />
              <div className='flex-1'>
                <p className='text-slate-400 mb-2 lg:text-base md:text-base text-xl'>Sports</p>
                <p className='text-cyan-600 text-2xl font-medium'>
                  Don&apos;t miss any Woodrow sports info with our interactive blog.
                </p>
                <div className='mt-4 text-lg'>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Replays of past matches
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Tryout information for upcoming sports
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Surveys and interactive content
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Interviews and candids of players
                  </p>
                  <Link href='/sports'>
                    <div className='rounded-full border border-cyan-600 hover:bg-cyan-50 mt-4 p-2 px-4 flex items-center font-medium text-cyan-600'>
                      Check out the sports page <FontAwesomeIcon icon={faAngleRight} className='ml-auto' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className='mt-16 flex items-center lg:flex-row md:flex-row flex-col'>
              <img src='/promo/booking.png' className='lg:w-[60%] md:w-[55%] w-full lg:ml-0 md:ml-0 mx-8 lg:mb-0 md:mb-0 mb-8 mr-8 flex-1 border border-slate-300 rounded-xl' />
              <div className='flex-1'>
                <p className='text-slate-400 mb-2 lg:text-base md:text-base text-xl'>Tickets for events</p>
                <p className='text-cyan-600 text-2xl font-medium'>
                  No more buying tickets in the cafeteria — everything&apos;s digital now.
                </p>
                <div className='mt-4 text-lg'>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> All information about the dance available for students and parents
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Tickets can be reserved online
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Each student gets an online ticket that can be shown at the door
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Students that purchased ticket will automatically be put in a list for teachers
                  </p>
                  <Link href='/bookings'>
                    <div className='rounded-full border border-cyan-600 hover:bg-cyan-50 mt-4 p-2 px-4 flex items-center font-medium text-cyan-600'>
                      See the new booking system <FontAwesomeIcon icon={faAngleRight} className='ml-auto' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className='mt-16 flex items-center lg:flex-row md:flex-row flex-col'>
              <img src='/promo/community.png' className='lg:w-[60%] md:w-[55%] w-full lg:ml-0 md:ml-0 mx-8 lg:mb-0 md:mb-0 mb-8 mr-8 flex-1 border border-slate-300 rounded-xl' />
              <div className='flex-1'>
                <p className='text-slate-400 mb-2 lg:text-base md:text-base text-xl'>Building community</p>
                <p className='text-cyan-600 text-2xl font-medium'>
                  From individual students to whole clubs, everyone can get involved in WWMS NOW.
                </p>
                <div className='mt-4 text-lg'>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Comment on blog posts and upvote
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Fill out surveys and upload pictures of events
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faRocket} className='text-cyan-600' /> Interested in being a part of the WWMS NOW development team? <Link href='/faq'><span className='text-cyan-600 underline decoration-cyan-700 decoration-[2px] underline-offset-[3px]'>See FAQ</span></Link>
                  </p>
                  <Link href='/events'>
                    <div className='rounded-full border border-cyan-600 hover:bg-cyan-50 mt-4 p-2 px-4 flex items-center font-medium text-cyan-600'>
                      Explore previous blog posts <FontAwesomeIcon icon={faAngleRight} className='ml-auto' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className='ml-auto mt-16 bg-cyan-600 rounded-tl-3xl rounded-br-3xl p-2 w-[70%]' />
            <div className='text-slate-800 mt-2 bg-cyan-50 border border-cyan-600 rounded-tl-3xl rounded-br-3xl p-8 w-full'>
              <div className='flex items-start'>
                <div className='mr-6 lg:block md:block hidden'>
                  <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faLock} className='text-3xl text-white bg-cyan-600 p-3 rounded-lg' />
                    {new Array(3).fill(null).map(x => {
                      return <FontAwesomeIcon key={x} icon={faLock} className='mt-4 text-3xl text-white/70 bg-cyan-600/50 p-3 rounded-lg' />
                    })}
                  </div>
                </div>
                <div>
                  <p className='lg:text-4xl md:text-4xl text-3xl font-semibold'>At WWMS NOW, we&apos;re committed to the privacy of everyone involved.</p>
                  <p className='lg:text-3xl md:text-3xl text-xl font-medium mt-4'>
                    <FontAwesomeIcon icon={faArrowRight} className='mr-2 text-slate-500' /> Only edison.k12.nj.us accounts can look at posts, interviews of players, photos, etc.
                  </p>
                  <p className='lg:text-3xl md:text-3xl text-xl font-medium mt-4'>
                    <FontAwesomeIcon icon={faArrowRight} className='mr-2 text-slate-500' /> Content uploaded to WWMS NOW is from clubs or teachers
                  </p>
                  <p className='lg:text-3xl md:text-3xl text-xl font-medium mt-4'>
                    <FontAwesomeIcon icon={faArrowRight} className='mr-2 text-slate-500' /> The comment sections on posts are kept safe
                  </p>
                </div>
              </div>
              
            </div>
            <div className='bg-cyan-600 rounded-tl-3xl rounded-br-3xl p-2 mt-2 w-[70%]' />
          </div>
        </div>
      </Layout>
    </>
  );
}
