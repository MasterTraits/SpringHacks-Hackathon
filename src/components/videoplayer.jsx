'use client'
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSwipeable } from 'react-swipeable';

const videoUrls = [
  'https://youtube.com/shorts/JoqjbkSTz9Y?si=4YqNzbqXNwF1FbBH',
  'https://youtube.com/shorts/ZPSvfABcjr8?si=JYHQ-hrwQLUlG-5g',
  'https://youtube.com/shorts/aYSDYRXLQFY?si=PvMenlnFRyEX8z7X'
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
    trackMouse: true
  });

  return (
    <div {...handlers} className="relative h-screen w-screen">
      <div className="absolute top-12 left-0 h-[calc(100%-3rem)] w-full">
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          playing
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;