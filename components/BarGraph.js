import React from "react";
import "tippy.js/animations/shift-toward-subtle.css";

export default function BarGraph() {
  return (
    <div className="max-w-[400px] flex flex-col items-center p-4 px-6 border border-slate-300 rounded mt-4 shadow bg-white">
      <h2 className="text-xl font-bold">MVP of Game</h2>
      <span className="text-sm font-semibold text-gray-500">3/1/22</span>

      <div className="flex items-end mt-4 w-[280px] space-x-2 sm:space-x-3">
        <div className="flex flex-col w-1/4 pb-5 group">
          <div className="relative flex justify-center w-full h-16 rounded-t-xl items-center bg-cyan-200 border border-cyan-600">
            <p className="text-cyan-600 font-semibold text-xl rotate-[15deg]">
              13
            </p>
          </div>
          <span className="mt-2 text-xs font-bold text-center">Ekya</span>
        </div>
        <div className="flex flex-col w-1/4 pb-5 group">
          <div className="relative flex justify-center w-full h-24 rounded-t-xl items-center bg-cyan-200 border border-cyan-600">
            <p className="text-cyan-600 font-semibold text-xl rotate-[15deg]">
              20
            </p>
          </div>
          <span className="mt-2 text-xs font-bold text-center">Pranav</span>
        </div>
        <div className="flex flex-col w-1/4 pb-5 group">
          <div className="relative flex justify-center w-full h-20 rounded-t-xl items-center bg-cyan-200 border border-cyan-600">
            <p className="text-cyan-600 font-semibold text-xl rotate-[15deg]">
              14
            </p>
          </div>
          <span className="mt-2 text-xs font-bold text-center">Dillon</span>
        </div>
        <div className="flex flex-col w-1/4 pb-5 group">
          <div className="relative flex justify-center w-full h-20 rounded-t-xl items-center bg-cyan-200 border border-cyan-600">
            <p className="text-cyan-600 font-semibold text-xl rotate-[15deg]">
              14
            </p>
          </div>
          <span className="mt-2 text-xs font-bold text-center">Aditya</span>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex items-center ml-auto">
          <span className="block w-4 h-4 bg-cyan-200 border border-cyan-600 rounded-sm" />
          <span className={`ml-1 text-xs font-medium mr-[8.25rem]`}>Votes</span>
        </div>
      </div>
    </div>
  );
}
