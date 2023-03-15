import Layout from "../../../components/Layout";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Sports() {
    const [team, setTeam] = useState('Any team');
    const [content, setContent] = useState('Any content');

    const teams = [
        "Any team",
        "Boys' Basketball",
        "Girls' Basketball",
        "Boys' Soccer",
        "Girls' Soccer",
        "Baseball",
        "Softball",
        "Track"
    ]

    const contents = [
        "Any content",
        "Match replays",
        "Player interviews",
        "News"
    ]

  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
            <p className='flex items-center text-lg mb-6 uppercase font-medium text-cyan-600'>
                Sports{" "}
                <span className='text-xs rounded-full p-0.5 px-2 border border-cyan-500 bg-cyan-100 text-cyan-600 ml-4'>
                    {team}
                </span>{" "}
                <span className='text-xs rounded-full p-0.5 px-2 border border-cyan-500 bg-cyan-100 text-cyan-600 ml-2'>
                    {content}
                </span>
            </p>
          <div className="flex items-start w-full">
            <div className='w-full mr-4'>
              <p className="text-4xl font-bold">Upcoming</p>
              <hr className='my-5 w-full border-slate-300' />
              <Link href={`/sports/post/baseball-and-softball-tryouts-coming-up`}>
                <div className='hover:scale-[1.03] hover:shadow-md transition border border-slate-300 rounded w-[400px] shadow shadow-slate-100'>
                  <img src='https://cfhsprowler.com/wp-content/uploads/2021/03/baseball-vs-softball-1494674054-1658.jpg' className='w-full h-[100px] rounded-t object-cover border-white' />
                  <div className='p-2 pb-3'>
                    <p className='text-sm uppercase font-medium text-slate-400'>March 18, 2023</p>
                    <p className='text-lg font-medium'>Baseball and softball tryouts coming up</p>
                    <div className='my-2' />
                    <div className='my-2 flex items-center'>
                      <div className='border border-red-500 bg-red-100 w-fit px-2 py-0.5 rounded-full font-medium text-red-600'>Baseball</div>
                      <div className='ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600'>News</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className='mt-4 border border-slate-300 rounded w-[400px] shadow shadow-slate-100'>
                <img src='https://trackandturf.com/wp-content/uploads/2020/04/about-image.jpg' className='w-full h-[100px] rounded-t object-cover border-white' />
                <div className='p-2 pb-3'>
                  <p className='text-sm uppercase font-medium text-slate-400'>March 18, 2023</p>
                  <p className='text-lg font-medium'>Track scheduled to start soon</p>
                  <div className='my-2' />
                  <div className='my-2 flex items-center'>
                    <div className='border border-purple-500 bg-purple-100 w-fit px-2 py-0.5 rounded-full font-medium text-purple-600'>Track</div>
                    <div className='ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600'>News</div>
                  </div>
                </div>
              </div>

              <p className="text-4xl font-bold mt-6">Past posts</p>
              <hr className='my-5 w-full border-slate-300' />
              <div className='mt-4 border border-slate-300 rounded w-[400px] shadow shadow-slate-100'>
                <img src='https://img.youtube.com/vi/7Aj2TKDJF-s/hqdefault.jpg' className='w-full h-[100px] rounded-t object-cover border-white' />
                <div className='p-2 pb-3'>
                  <p className='text-sm uppercase font-medium text-slate-400'>January 3, 2023</p>
                  <p className='text-lg font-medium'>Woodrow Wilson v. John Adams: 27-39</p>
                  <div className='my-2 flex items-center'>
                    <div className='border border-orange-500 bg-orange-100 w-fit px-2 py-0.5 rounded-full font-medium text-orange-600'>Basketball</div>
                    <div className='ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600'>Match replays</div>
                  </div>
                </div>
              </div>
            </div>
            {/* TODO filters: multi-select teams and content */}
            <div className="pb-4 flex-col shadow-[0px_4px_0px_0px_#06b6d490] lg:flex md:flex hidden ml-auto border border-cyan-500 rounded p-2 w-[400px]">
              <p className="text-lg font-medium">Filter this content</p>
              <hr className="my-2" />
              <div className="">
                <p className="uppercase text-slate-500 font-medium text-sm mb-1">
                  Team
                </p>
                <Tippy
                  content={
                    <div className="min-w-[200px] flex flex-col">
                      {teams.map(x => {
                        return <div onClick={() => setTeam(x)} className={`select-none transition flex items-center hover:cursor-pointer p-2 ${teams.indexOf(x) !== teams.length - 1 && 'border-b'} ${team === x ? 'bg-cyan-50 text-cyan-600' : 'odd:bg-white even:bg-slate-100 border-slate-300'}`} id={teams.indexOf(x)}>
                            {x} <FontAwesomeIcon icon={team === x ? faCircleSolid : faCircle} className='transition ml-auto' />
                        </div>
                      })}
                    </div>
                  }
                  className="shadow-lg shadow-slate-500/10 bg-white border border-slate-300 rounded focus:outline-none"
                  animation="shift-toward-subtle"
                  interactive
                  delay={[0, 0]}
                  trigger="click"
                  placement="bottom-start"
                >
                  <div className="transition border border-slate-300 bg-slate-100 hover:cursor-pointer hover:border-slate-400 hover:bg-slate-200/80 select-none rounded p-1 py-0.5 w-fit">
                    {team}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-1 text-slate-500"
                    />
                  </div>
                </Tippy>

                <p className="mt-4 uppercase text-slate-500 font-medium text-sm mb-1">
                  Content type
                </p>
                <Tippy
                  content={
                    <div className="min-w-[200px] flex flex-col">
                      {contents.map(x => {
                        return <div onClick={() => setContent(x)} className={`select-none transition flex items-center hover:cursor-pointer p-2 ${contents.indexOf(x) !== contents.length - 1 && 'border-b'} ${content === x ? 'bg-cyan-50 text-cyan-600' : 'odd:bg-white even:bg-slate-100 border-slate-300'}`} id={contents.indexOf(x)}>
                            {x} <FontAwesomeIcon icon={content === x ? faCircleSolid : faCircle} className='transition ml-auto' />
                        </div>
                      })}
                    </div>
                  }
                  className="shadow-lg shadow-slate-500/10 bg-white border border-slate-300 rounded focus:outline-none"
                  animation="shift-toward-subtle"
                  interactive
                  delay={[0, 0]}
                  trigger="click"
                  placement="bottom-start"
                >
                  <div className="transition border border-slate-300 bg-slate-100 hover:cursor-pointer hover:border-slate-400 hover:bg-slate-200/80 select-none rounded p-1 py-0.5 w-fit">
                    {content}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-1 text-slate-500"
                    />
                  </div>
                </Tippy>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
