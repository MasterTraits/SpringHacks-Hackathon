'use client'

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSwipeable } from 'react-swipeable';

const videoUrls = [
  // '/videos/SAMPLEVID1.mp4',
  // '/videos/SAMPLEVID2.mp4',
  // '/videos/SAMPLEVID3.mp4'
];

const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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


    // CANT PAUSE JUST YET
    <div className="relative h-screen w-screen flex items-start justify-center">
      <div className="relative h-[calc(100%-3rem)] w-full">
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          playing
          controls={true}
          width="100%"
          height="100%"
          className="w-full h-full"
        />
        <div
          {...handlers}
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ backgroundColor: 'transparent', pointerEvents: 'auto' }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPlayer;