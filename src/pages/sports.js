import Layout from "../../components/Layout";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function Sports() {
    const [team, setTeam] = useState('Any team');
    const [content, setContent] = useState('Any content');

    const teams = [
        "Any team",
        "Boys' Basketball",
        "Girls' Basketball",
        "Boys' Soccer",
        "Girls' Soccer",
        "Track"
    ]

    const contents = [
        "Any content",
        "Match replays",
        "Player interviews"
    ]

  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
            <p className='text-lg mb-6 uppercase font-medium text-cyan-600'>Sports</p>
          <div className="flex items-start">
            <div>
              <p className="text-4xl font-bold">Upcoming</p>
              <p className='text-slate-500 mt-2'>Placeholder</p>

              <p className="text-4xl font-bold mt-6">Past posts</p>
              <p className='text-slate-500 mt-2'>Placeholder</p>
            </div>
            <div className="pb-4 flex-col shadow-[0px_4px_0px_0px_#06b6d490] lg:flex md:flex hidden ml-auto border border-cyan-500 rounded p-2 w-[300px]">
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
