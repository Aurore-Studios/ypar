import React from "react";

export default function Surveys() {
    return (
        <div className="w-full md:w-96 md:max-w-full items-center w-max max-w-screen-md">
            <div className="p-6 sm:rounded-md items-center w-max max-w-screen-md pl-[3.1rem] pr-[3.1rem] rounded-lg shadow-xl bg-white ">
                <form method="POST" action="#">
                    <div className="block mb-6">
            <span className="text-gray-700">
              What grade are you in?
            </span>
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
              What sport are you going to try out for?
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
                                    <span className="ml-2">Track</span>
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
                                    <span className="ml-2">Baseball</span>
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
                                    <span className="ml-2">Neither</span>
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
                <div className={"flex align-start pl-[3.8rem]"}>
                    <div
                        className='items-start border border-red-500 bg-red-100 w-fit px-2 py-0.5 rounded-full font-medium text-red-600 '>Baseball
                    </div>
                    <div className="pl-2">
                        <div
                            className='border border-purple-500 bg-purple-100 w-fit px-2 py-0.5 rounded-full font-medium text-purple-600'>Track
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}