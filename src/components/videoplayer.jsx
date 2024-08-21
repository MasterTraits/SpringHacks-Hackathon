'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ReactPlayer from 'react-player';
import VideoCntrls from './videobtns'; // Assuming you have this component
import ShortsUserNames from './videousername';
import Link from 'next/link';
import Navbar from './navbar'; // Import the Navbar component

const VideoPlayer = () => {
  const videoUrls = [
    '/videos/SAMPLEVID1.mp4',
    '/videos/SAMPLEVID2.mp4',
    '/videos/SAMPLEVID3.mp4'
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [navbarRef]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  const handlers = useSwipeable({
    onSwipedUp: handleNextVideo,
    onSwipedDown: handlePrevVideo,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    delta: 10
  });

  return (
    <div className="relative h-screen w-screen" {...handlers}>
      <div className="relative w-full" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          playing
          controls={true}
          width="100%"
          height={{ height: `calc(100vh - ${navbarHeight}px)` }}
          className='object-cover'
        />
        <div className="absolute top-0 left- w-full h-full flex items-center justify-center">
          <VideoCntrls />
        </div>
      </div>
      <Navbar ref={navbarRef} />  
    </div>
  );
};

export default VideoPlayer;