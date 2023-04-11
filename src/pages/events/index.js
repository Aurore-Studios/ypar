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
              WWMS Events
            </p>
          </div>
          <div className="flex items-start w-full">
            <div className="w-full mr-4">
              <p className="text-3xl font-semibold">Upcoming</p>
              <hr className="my-5 w-full border-slate-300" />

              <div className="flex flex-wrap items-start">
                <Link
                  href={`/events/post/baseball-and-softball-tryouts-coming-up`}
                >
                  <div className="ml-4 mt-4 hover:scale-[1.03] hover:shadow-md transition border border-slate-300 rounded max-w-[400px] shadow shadow-slate-100">
                    <img
                      src="https://cdn.smore.com/u/thumbs/f042/thumb-23edaeeac1d044a9912ce6ddb4fe19f3.jpeg"
                      className="w-full h-[100px] rounded-t object-cover border-white"
                    />
                    <div className="p-2 pb-3">
                      <p className="text-sm uppercase font-medium text-slate-400">
                        February 9, 2023
                      </p>
                      <p className="text-lg font-medium">
                        The Glow in the dark dance is coming up!
                      </p>
                      <div className="my-2" />
                      <div className="my-2 flex items-center">
                        <div className="border border-cyan-500 bg-cyan-100 w-fit px-2 py-0.5 rounded-full font-medium text-cyan-600">
                          Dance
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-3xl font-semibold mt-6">Past posts</p>

              <hr className="my-5 w-full border-slate-300" />

              <div className="flex flex-wrap items-start">
                <div className='ml-4 text-xl text-slate-500'>
                  There aren&apos;t any previous posts yet.
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