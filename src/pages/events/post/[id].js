import Layout from "../../../../components/Layout";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faCircle as faCircleSolid,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircle, faMoon } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Sports() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 py-16 bg-gradient-to-tr from-zinc-900 to-slate-800 text-white">
          <img
            src="https://cdn.smore.com/u/thumbs/f042/thumb-23edaeeac1d044a9912ce6ddb4fe19f3.jpeg"
            className="w-full h-[400px] object-cover"
          />
          <p className="font-extrabold text-5xl mt-8">
            The Glow in the dark dance is coming up!
          </p>
          <p className="mt-2 text-2xl">
            We have all the details you need about the   dance to make the most of it.
          </p>
          <p className="text-xl mt-5">
            By{" "}
            <span className="text-cyan-500">Ekya Dogra</span>
          </p>
          <p className="text-xl text-zinc-400 mt-1">Posted March 14, 2023</p>
        </div>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
          <div className="prose prose-xl">
            <p>
              <em>
                This post was created by the WWMS YPAR team for demonstration
                purposes.
              </em>
            </p>
            <p>
              There&apos;s a new dance coming up for Woodrow, and it&apos;s glow in the dark this time! Woodrow will be using flourescent lights to make this dance a great time for students.
            </p>
            <p>
              To get the most out of this dance, <strong>wear all white</strong>. Your clothes will glow! The dance begins at 6 PM and ends at 8 PM. Tickets can be bought online on WWMS NOW and shown at the door.
            </p>
            <p>
              Additionally, snacks and drinks are being sold for a dollar each. Make sure to bring money!
            </p>
          </div>
          <div className='w-fit'>
            <Link href='/bookings/glow-in-the-dark'>
              <div className='shadow-[0px_4px_0px_0px_#0891b290] text-xl mt-6 border w-fit border-cyan-600 hover:bg-cyan-50 p-2 px-4 rounded-full text-cyan-600'>
                Book tickets to the dance <FontAwesomeIcon icon={faArrowRight} className='-rotate-45 ml-1' />
              </div>
            </Link>
          </div>
          <hr className='my-8' />
          <p className='text-3xl font-medium mb-4'>Comments</p>
          {session ? <div className='flex items-center'>
            <img src={session.user.image} className='rounded-full border border-slate-300' width={40} />
            <input placeholder='Leave a comment...' className='lg:w-1/2 md:w-3/4 w-[80%] border border-slate-300 p-1.5 rounded-full ml-4 px-3' />
            <div className='border border-cyan-500 bg-cyan-100 text-cyan-600 hover:cursor-pointer select-none  p-1.5 rounded-full ml-4 px-3'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div> : <p className='text-xl text-slate-600'>Sign in to leave a comment.</p>}
          <FontAwesomeIcon icon={faMoon} className='mt-10 text-5xl text-slate-400' />
          <p className='text-slate-400 mt-2 text-lg'>It&apos;s kinda quiet here. Be the first to comment!</p>
        </div>
      </Layout>
    </>
  );
}