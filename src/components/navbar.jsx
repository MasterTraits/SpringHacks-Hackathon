'use client'

import React, { useEffect, useRef } from 'react';
import { BsBriefcase } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { GoFlame } from 'react-icons/go';
import { PiGraduationCap } from "react-icons/pi";
import Link from 'next/link';

const Navbar = ({ setNavBarHeight = () => {} }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavBarHeight(navbarRef.current.clientHeight);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navbarRef, setNavBarHeight]);

  return (
    <div ref={navbarRef} className='fixed bottom-0 w-full bg-navbar text-white z-10'>
      <div className='flex justify-around py-4 px-2'>
        <Link href="/discover">
          <div className='flex flex-col items-center cursor-pointer'>
            <PiGraduationCap className='h-6 w-6' />
            <span className='text-xs'>Discover</span>
          </div>
        </Link>
        <Link href="/shorts">
          <div className='flex flex-col items-center cursor-pointer'>
            <GoFlame className='h-6 w-6' />
            <span className='text-xs'>Shorts</span>
          </div>
        </Link>
        <Link href="/mentor">
          <div className='flex flex-col items-center cursor-pointer'>
            <BsBriefcase className='h-6 w-6'/>
            <span className='text-xs'>Mentor</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className='flex flex-col items-center cursor-pointer'>
            <FiUser className='h-6 w-6'/>
            <span className='text-xs'>Profile</span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;