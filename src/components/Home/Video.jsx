import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://www.pexels.com/download/video/33187885/"
      ></video>
    </div>
  );
};

export default Video;
