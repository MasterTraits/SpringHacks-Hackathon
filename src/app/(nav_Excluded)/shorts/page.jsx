"use client";
import VideoCntrls from "@/components/shorts/videobtns";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const ShortsPage = () => {
  const videoUrls = [
    "./videos/SAMPLEVID1.mp4",
    "./videos/SAMPLEVID2.mp4",
    "./videos/SAMPLEVID3.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [handlers, setHandlers] = useState({});

  useEffect(() => {
    setHandlers({
      onSwipedUp: handleNextVideo,
      onSwipedDown: handlePrevVideo,
      preventDefaultTouchmoveEvent: true,
      trackTouch: true,
      delta: 10,
    });
  }, []);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length
    );
  };

  return (
    <main className="relative h-[92vh]" {...handlers}>
      <div className="relative w-full">
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          playing
          controls={true}
          width="100%"
          height="100%"
          className="object-cover h-[92vh] "
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <VideoCntrls />
        </div>
      </div>
    </main>
  );
};
export default ShortsPage;
