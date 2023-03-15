import React from "react";
import "tippy.js/animations/shift-toward-subtle.css";

export default function BarGraph() {
    return (

        <div
            className="flex flex-col items-center w-max max-w-screen-md  pb-6 bg-white rounded-lg shadow-xl sm:pr-10 sm:pl-10 sm:pt-5 ">

            <h2 className="text-xl font-bold">MVP of Game</h2>
            <span className="text-sm font-semibold text-gray-500">3/1/22</span>
            <div className="flex items-end flex-grow w-80 mt-2 space-x-2 sm:space-x-3">
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">13</span>
                    <div className="relative flex justify-center w-full h-16 bg-cyan-600"/>
                    <span className="absolute bottom-0 text-xs font-bold">Ekya</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group mr-10">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">20</span>
                    <div className="relative flex justify-center w-full h-24 bg-cyan-600"/>
                    <span className="absolute bottom-0 text-xs font-bold">Pranav</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">14</span>
                    <div className="relative flex justify-center w-full h-20 bg-cyan-600"/>
                    <span className="absolute bottom-0 text-xs font-bold">Dillon</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">14</span>
                    <div className="relative flex justify-center w-full h-20 bg-cyan-600"/>
                    <span className="absolute bottom-0 text-xs font-bold">Aditya</span>
                </div>

            </div>
            <div className="flex w-full mt-3">
                <div className="flex items-center ml-auto">
                    <span className="block w-4 h-4 bg-cyan-600"/>
                    <span className={`ml-1 text-xs font-medium mr-[8.25rem]`}>Votes</span>
                </div>
            </div>
            <div className="pt-2">
            <div
                className='border border-orange-500 bg-orange-100 w-fit px-2 py-0.5 rounded-full font-medium text-orange-600'>Basketball
            </div>
            </div>
        </div>

    );
};