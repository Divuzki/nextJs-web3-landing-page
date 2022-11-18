import React from "react";

const AuctionPage = () => {
  return (
    <div className="h-full flex flex-col w-full my-2">
      <div className="flex flex-col gap-4 md:px-[50px] w-full items-center justify-center">
        <figure className="md:w-[600px] w-full relative overflow-hidden h-[300px] m-auto bg-gray-600 flex justify-center items-end rounded-3xl">
          <div className="absolute w-full px-2 top-[130px] flex justify-between">
            {/* images */}
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-400 hover:z-10 transition-all hover:scale-110 cursor-pointer border rounded-full"></div>
              {/* added by 12px */}
              <div className="w-8 h-8 -translate-x-3 hover:z-10 transition-all hover:scale-110 cursor-pointer border bg-gray-400 rounded-full"></div>
              <div className="w-8 h-8 -translate-x-6 hover:z-10 transition-all hover:scale-110 cursor-pointer border bg-gray-400 rounded-full"></div>
              <div className="w-8 h-8 -translate-x-9 hover:z-10 transition-all hover:scale-110 cursor-pointer border bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2 py-2 px-4 rounded-lg bg-slate-700 shadow-lg">
              <span className="text-sm text-gray-300 opacity-60">
                Ending in
              </span>
              <span className="text-md font-semibold opacity-70">12h 30m</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 pt-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col px-4">
                <span className="text-lg">Bored Ape</span>
                <span className="text-sm text-gray-400">
                  By{" "}
                  <span className="text-blue-400 cursor-pointer hover:underline">
                    divuzki
                  </span>
                </span>
              </div>
              <div className="flex gap-4 justify-between p-2">
                <div className="px-4 py-2 border-[0.2px] border-slate-700 justify-center items-center rounded-full gap-2 flex">
                  <svg className="fill-white w-3 h-3" viewBox="0 0 397.7 311.7">
                    <path
                      d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
                    />
                    <path
                      d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
                    />
                    <path
                      d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
                    />
                  </svg>
                  <span className="font-mono text-amber-300">0.34</span>
                </div>
                <button className="text-white px-4 py-2 rounded-full bg-gray-900 capitalize">
                  place bid
                </button>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default AuctionPage;
