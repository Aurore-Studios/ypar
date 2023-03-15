import Layout from "../../../../components/Layout";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
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
            src="https://cfhsprowler.com/wp-content/uploads/2021/03/baseball-vs-softball-1494674054-1658.jpg"
            className="w-full h-[400px] object-cover"
          />
          <p className="font-extrabold text-5xl mt-8">
            Baseball and softball tryouts coming up
          </p>
          <p className="mt-2 text-2xl">
            Here&apos;s all the need-to-know information for how to try out,
            where to meet, and how to know if you made it in.
          </p>
          <p className="text-xl mt-5">
            By <span className="text-cyan-500">Dillon Petagna</span> and{" "}
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
              Spring&apos;s almost here, and that means it&apos;s sports season.
              Two of the sports being coached this season at Woodrow are
              baseball, coached by Mr. Campione, and softball, coached by Ms.
              Connell. Throughout the season, Woodrow&apos;s baseball and
              softball teams will face off against other locations like
              Piscataway, Perth Amboy, and John Adams Middle School. So as
              spring nears, here&apos;s what you need to know to get a spot on
              the new team.
            </p>
            <h3>Tryout schedule and locations</h3>
            <p>
              The tryouts for both teams will begin this Thursday, on March
              16th, and run throughout Friday and Monday, March 20th. Anyone
              looking to join the teams must arrive to the school by{" "}
              <u>3:15 pm</u> each day.
            </p>
            <p>
              All students must change first in the locker rooms and then report
              to the baseball field immediately. Coach Campione and Coach
              Connell will both be present. Tryouts will end at <u>4:45 pm</u>.
            </p>
            <h3>What to bring</h3>
            <p>
              Baseball gloves are required for the tryouts, and it&apos;s also a
              good idea to wear comfortable, sports-appropriate clothing.
              Additionally, team bats are provided for everyone, but it is
              encouraged that you bring your own bat if possible.
            </p>
            <h3>And finally... results</h3>
            <p>
              After tryouts are over, the final roster for the teams will be
              posted on Google Classroom.
            </p>
            <p>
              If you have any more questions regarding the team, feel free to
              leave a comment below. Best of luck to all students going for the
              tryouts!
            </p>
          </div>
          <hr className='my-8' />
          <p className='text-3xl font-medium mb-4'>Comments</p>
          {session ? <div className='flex items-center'>
            <img src={session.user.image} className='rounded-full border border-slate-300' width={40} />
            <input placeholder='Leave a comment...' className='border border-slate-300 p-1.5 rounded-full ml-4 px-3' />
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
