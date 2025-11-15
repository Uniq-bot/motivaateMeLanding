import React from "react";

const Hero = () => {
  return (
    <div className="text-white flex font-mono leading-none items-center justify-center h-180 w-full bg-gray-900">
      <div className="w-full h-full  flex items-center justify-center flex-col">
        <h1 className="text-[5rem] font-bold tracking-[-5px]">
          Unlock Your Daily{" "}
          <span className="text-[#3C63CC] font-stretch-extra-condensed">
            Motivation
          </span>
        </h1>
        <p className="w-full text-right pr-57 text-2xl mt-1 font-serif italic tracking-[-1px]">
          "Share your Thoughts. Stay Inspired."
        </p>
        <h3 className="text-3xl mt-3 px-120 text-center ">
          A simple place to post, connect, and motivate each other.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
