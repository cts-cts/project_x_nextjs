"use client";

import { useState, useEffect } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import VideoService from "../services/video_service";

const VideoComponent = () => {
  return (
    <MediaPlayer
      aspectRatio="16/9"
      title="Sprite Fight"
      src={{
        src: "https://pixeldrain.com//api/file/pa7oWmu2?download",
        type: "video/mp4",
      }}
    >
      <MediaProvider />
      <DefaultVideoLayout
        thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
        icons={defaultLayoutIcons}
        noScrubGesture={false}
      />
    </MediaPlayer>
  );
};

export default VideoComponent;
