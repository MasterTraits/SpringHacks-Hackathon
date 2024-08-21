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

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to re-enable scrolling
    return () => {
      document.body.style.overflow = '';
    };
  }, [navbarRef, setNavBarHeight]);

  return (
    <div ref={navbarRef} className='fixed bottom-0 w-full bg-navbar text-white z-10'>
      <div className='flex justify-around py-4 px-2'>
        <Link href="/dashboard" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <BsBriefcase />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link href="/profile" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <FiUser />
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/shorts" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <GoFlame />
            <span>Shorts</span>
          </div>
        </Link>
        <Link href="/education" passHref>
          <div className='flex flex-col items-center cursor-pointer'>
            <PiGraduationCap />
            <span>Education</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;