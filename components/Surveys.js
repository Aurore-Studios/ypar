import React from "react";

export default function Surveys() {
  return (
    <div className="w-[400px] md:max-w-full items-center max-w-screen-md">
      <div className="p-6 py-4 sm:rounded-md items-center border border-slate-300 rounded mt-4 shadow bg-white ">
        <form method="POST" action="#">
          <div className="block mb-6">
            <span className="font-medium text-lg">What grade are you in?</span>
            <select
              name="present"
              className="
            block
            w-full
            accent-cyan-600
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-cyan-300
            focus:ring
            focus:ring-cyan-200
            focus:ring-opacity-50
          "
            >
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

                    <span className="text-gray-700">
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
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="
            h-10
            px-5
            text-cyan-100
            bg-cyan-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-cyan-800

          "
                        >
                            Send Answers
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
