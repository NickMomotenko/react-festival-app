import React, { useState, useRef, useEffect } from "react";

import "./Video.scss";

const Video = ({ isLoading, setIsLoading }) => {
  const videoRef = useRef(null);
  const [heightVideo, setHeightVideo] = useState(null);

  useEffect(() => {
    videoRef.current.addEventListener(
      "canplay",
      () => {
        currentVideoHeight();
        setIsLoading(false);
        videoRef.current.play();
      },
      false
    );

    window.addEventListener("resize", () => {
      videoRef.current.style = document.documentElement.clientWidth;
    });
  });

  const url = `https://www.kikk.be/2017/files/templates/kikk2017/public/assets/videos/king-kong.mp4?v=2`;

  let currentVideoHeight = () => {
    setHeightVideo(videoRef.current.clientHeight);
  };

  return (
    <video
      src={url}
      loop={true}
      muted
      className="video-section"
      ref={videoRef}
      style={{ height: `${heightVideo}px` }}
    ></video>
  );
};

export default Video;
