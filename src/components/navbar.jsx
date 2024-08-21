import React from 'react';
import { BsBriefcase } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { GoFlame } from 'react-icons/go';
import { PiGraduationCap } from "react-icons/pi";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed bottom-0 w-full bg-navbar text-white z-10'>
      <div className='flex justify-around py-4 px-2'>
        <Link href="/discover" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <PiGraduationCap className="text-2xl" /> 
            <span className='text-sm font-extralight tracking-wider'>Learn</span>
          </div>
        </Link>
        
        <Link href="/shorts" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <GoFlame className="text-2xl"/>
            <span className='text-sm font-extralight tracking-wider'>Shorts</span>
          </div>
        </Link>

        <Link href="/mentor" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <BsBriefcase className="text-2xl" />
            <span className='text-sm font-extralight tracking-wider'>Mentor</span>
          </div>
        </Link>

        <Link href="/profile" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <FiUser className="text-2xl" />
            <span className='text-sm font-extralight tracking-wider'>Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;