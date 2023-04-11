import Layout from "../../../components/Layout";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircle as faCircleSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Surveys from "components/Surveys";
import BarGraph from "components/BarGraph";

export default function Sports() {
  const [team, setTeam] = useState("Any team");
  const [content, setContent] = useState("Any content");

  const teams = [
    "Any team",
    "Boys' Basketball",
    "Girls' Basketball",
    "Boys' Soccer",
    "Girls' Soccer",
    "Baseball",
    "Softball",
    "Track",
  ];

  const contents = [
    "Any content",
    "Match replays",
    "Player interviews",
    "News",
    "Interactive content"
  ];

  return (
    <>
      <Layout>
        <div className="lg:px-16 md:px-8 px-4 pt-16">
          <div className="flex items-center mb-6">
            <p className="border-b-4 border-cyan-600 pb-2 text-4xl uppercase font-bold text-cyan-600">
              WWMS Sports
            </p>
            <div className="lg:block md:block hidden uppercase ml-auto">
              <p className="text-slate-500 font-medium text-lg mb-2">
                Filter this content
              </p>
              <div className="flex items-center">
                <Tippy
                  content={
                    <div className="normal-case min-w-[200px] flex flex-col">
                      {teams.map((x) => {
                        return (
                          <div
                            onClick={() => setTeam(x)}
                            key={x}
                            className={`select-none transition flex items-center hover:cursor-pointer p-2 ${
                              teams.indexOf(x) !== teams.length - 1 &&
                              "border-b"
                            } ${
                              team === x
                                ? "bg-cyan-50 text-cyan-600"
                                : "odd:bg-white even:bg-slate-100 border-slate-300"
                            }`}
                            id={teams.indexOf(x)}
                          >
                            {x}{" "}
                            <FontAwesomeIcon
                              icon={team === x ? faCircleSolid : faCircle}
                              className="transition ml-auto"
                            />
                          </div>
                        );
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
                  <p className="hover:cursor-pointer text-xl font-medium rounded-full p-0.5 px-3 border border-cyan-500 bg-cyan-100 text-cyan-600 hover:border-cyan-600 hover:bg-cyan-200 hover:text-cyan-700 transition">
                    {team}{" "}
                    <FontAwesomeIcon icon={faAngleDown} className="ml-1.5" />
                  </p>
                </Tippy>{" "}
                <Tippy
                  content={
                    <div className="normal-case min-w-[200px] flex flex-col">
                      {contents.map((x) => {
                        return (
                          <div
                            onClick={() => setContent(x)}
                            key={x}
                            className={`select-none transition flex items-center hover:cursor-pointer p-2 ${
                              contents.indexOf(x) !== contents.length - 1 &&
                              "border-b"
                            } ${
                              content === x
                                ? "bg-cyan-50 text-cyan-600"
                                : "odd:bg-white even:bg-slate-100 border-slate-300"
                            }`}
                            id={contents.indexOf(x)}
                          >
                            {x}{" "}
                            <FontAwesomeIcon
                              icon={content === x ? faCircleSolid : faCircle}
                              className="transition ml-auto"
                            />
                          </div>
                        );
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
                  <p className="hover:cursor-pointer text-xl font-medium rounded-full p-0.5 px-3 border border-cyan-500 bg-cyan-100 text-cyan-600 hover:border-cyan-600 hover:bg-cyan-200 hover:text-cyan-700 transition ml-2">
                    {content}{" "}
                    <FontAwesomeIcon icon={faAngleDown} className="ml-1.5" />
                  </p>
                </Tippy>
              </div>
            </div>
          </div>
          <div className="flex items-start w-full">
            <div className="w-full mr-4">
              <p className="text-3xl font-semibold">Upcoming</p>
              <hr className="my-5 w-full border-slate-300" />

              <div className="flex flex-wrap items-start">
                <Link
                  href={`/sports/post/baseball-and-softball-tryouts-coming-up`}
                >
                  <div className="ml-4 mt-4 hover:scale-[1.03] hover:shadow-md transition border border-slate-300 rounded max-w-[400px] shadow shadow-slate-100">
                    <img
                      src="https://cfhsprowler.com/wp-content/uploads/2021/03/baseball-vs-softball-1494674054-1658.jpg"
                      className="w-full h-[100px] rounded-t object-cover border-white"
                    />
                    <div className="p-2 pb-3">
                      <p className="text-sm uppercase font-medium text-slate-400">
                        March 18, 2023
                      </p>
                      <p className="text-lg font-medium">
                        Baseball and softball tryouts coming up
                      </p>
                      <div className="my-2" />
                      <div className="my-2 flex items-center">
                        <div className="border border-red-500 bg-red-100 w-fit px-2 py-0.5 rounded-full font-medium text-red-600">
                          Baseball
                        </div>
                        <div className="ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600">
                          News
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/*
                <div className="mt-4 ml-4 border border-slate-300 rounded w-[400px] shadow shadow-slate-100">
                  <img
                    src="https://trackandturf.com/wp-content/uploads/2020/04/about-image.jpg"
                    className="w-full h-[100px] rounded-t object-cover border-white"
                  />
                  <div className="p-2 pb-3">
                    <p className="text-sm uppercase font-medium text-slate-400">
                      March 18, 2023
                    </p>
                    <p className="text-lg font-medium">
                      Track scheduled to start soon
                    </p>
                    <div className="my-2" />
                    <div className="my-2 flex items-center">
                      <div className="flex align-center">
                        <div className="border border-purple-500 bg-purple-100 w-fit px-2 py-0.5 rounded-full font-medium text-purple-600">
                          Track
                        </div>
                        <div className="ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600">
                          News
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                */}

                <div className="ml-4">
                  <Surveys />
                </div>
              </div>
              <p className="text-3xl font-semibold mt-6">Past posts</p>

              <hr className="my-5 w-full border-slate-300" />

              <div className="flex flex-wrap items-start">
                <div className="ml-4 mt-4 border border-slate-300 rounded w-[400px] shadow shadow-slate-100">
                  <img
                    src="https://img.youtube.com/vi/7Aj2TKDJF-s/hqdefault.jpg"
                    className="w-full h-[100px] rounded-t object-cover border-white"
                  />
                  <div className="p-2 pb-3">
                    <p className="text-sm uppercase font-medium text-slate-400">
                      January 3, 2023
                    </p>
                    <p className="text-lg font-medium">
                      Woodrow Wilson v. John Adams: 27-39
                    </p>
                    <div className="my-2 flex items-center">
                      <div className="border border-orange-500 bg-orange-100 w-fit px-2 py-0.5 rounded-full font-medium text-orange-600">
                        Basketball
                      </div>
                      <div className="ml-2 border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600">
                        Match replays
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='ml-4'>
                <BarGraph />
                </div>
              </div>
            </div>
            {/* TODO filters: multi-select teams and content */}
          </div>
        </div>
      </Layout>
    </>
  );
}
