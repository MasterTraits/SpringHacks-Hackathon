import React from 'react';
import { GoCopilot } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// make useState later ng fa heart

const VideoCntrls = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full *:mb-[1rem] mt-[4rem]">
      <span>
      <GoCopilot className='text-2xl bg-white mb-5'/>
      </span>
      <span>
        <FaRegHeart></FaRegHeart>
      </span>
    </div>
  );
};

export default VideoCntrls;