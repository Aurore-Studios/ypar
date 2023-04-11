import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Surveys() {
  return (
    <div className="max-w-[400px] md:max-w-full items-center">
      <div className="p-4 items-center border border-slate-300 rounded mt-4 shadow bg-white">
        <form method="POST" action="#">
          <div className="block mb-6">
            <span className="font-medium text-lg flex items-center">
              What grade are you in?
              <div className='text-sm bg-cyan-200 border border-cyan-600 text-cyan-600 px-1.5 rounded translate-x-7 -translate-y-7 ml-auto right-0'>
                Interactive content
              </div>
            </span>
            <div className='mt-1.5 flex items-center'>
              <select
                name="present"
                className="
              block border-r-0 rounded-r-none border-slate-300 hover:border-slate-400 active:border-cyan-500 w-full
            "
              >
                <option>6th grade</option>
                <option>7th grade</option>
                <option>8th grade</option>
              </select>
              <div className='bg-cyan-500 p-1 px-2.5 text-white border border-cyan-500 rounded-r'>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </div>

          <span className="font-medium text-lg">
            Who do you think is going to win this game?
          </span>
          <div className="mb-6">
            <div className="mt-2">
              <div>
                <div className="inline-flex items-center">
                  <input
                    name="season"
                    type="radio"
                    className="
                  text-cyan-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                "
                    defaultChecked
                  />
                  <span className="ml-2">WWMS</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center">
                  <input
                    name="season"
                    type="radio"
                    className="
                  text-cyan-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-cyan-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-cyan-200
                  focus:ring-opacity-50
                "
                  />
                  <span className="ml-2">JAMS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-cyan-600 p-2.5 py-1.5 rounded-md text-white font-medium"
            >
              Send Answers
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
