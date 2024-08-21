import React from 'react';
import { GoCopilot } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// make useState later ng fa heart

const VideoCntrls = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full *:mb-[1rem] mt-[4rem]">
      <span className='bg-white rounded-3xl '>
        <GoCopilot className="text-2xl custom-bg mb-5" />
      </span>

      <span className='flex flex-col items-center'>
        {/* add counter ng likes later ui muna */}
      <FaRegHeart className="text-2xl  bg-white mb-0 rounded-3xl" />
      <p className=''>8000</p>
      </span>

      <span className='flex flex-col items-center'>
      <FaRegHeart className="text-2xl  bg-white mb-0 rounded-3xl" />
      <p className=''>8000</p>
      </span>

      <span className='flex flex-col items-center'>
      <FaRegHeart className="text-2xl bg-white mb-0 rounded-3xl" />
      <p className=''>8000</p>
      </span>

      <span className='flex flex-col items-center'>
      <FaRegHeart className="text-2xl bg-white mb-0 rounded-3xl" />
      <p className=''>8000</p>
      </span>

    </div>
  );
};

export default VideoCntrls;