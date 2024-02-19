"use client";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

const VideoComponent = () => {
  if (typeof window !== "undefined") {
    document.cookie = "accountToken=LepJhWd63YCL0w6Dfs6ce8KnDfXvGQ7t";
    return (
      <MediaPlayer
        title="Sprite Fight"
        // src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
        src="https://store10.gofile.io/download/45588b39-f66c-4d37-8452-bdad46186be4/video.mp4"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          icons={defaultLayoutIcons}
          noScrubGesture={false}
        />
      </MediaPlayer>
    );
  }
};

export default VideoComponent;
