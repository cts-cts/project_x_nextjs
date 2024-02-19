"use client";

import { useState, useEffect } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import VideoService from "../services/video_service";

const VideoComponent = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const url = await VideoService.getVideo();
        setVideoUrl(url);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchVideo();
  }, []);

  if (videoUrl == null) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      {videoUrl && (
        <video controls width="500">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
  // const [videoSource, setVideoSource] = useState("");
  // useEffect(() => {
  //   const fetchVideoSource = async () => {
  //     try {
  //       const response = await fetch(
  //         // "https://store10.gofile.io/download/45588b39-f66c-4d37-8452-bdad46186be4/video.mp4",
  //         "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
  //         {
  //           headers: {
  //             Cookie: "accountToken=LepJhWd63YCL0w6Dfs6ce8KnDfXvGQ7t",
  //           },
  //         }
  //       );
  //       if (response.ok) {
  //         const videoBlob = await response.blob();
  //         const videoUrl = URL.createObjectURL(videoBlob);
  //         setVideoSource(videoUrl);
  //       } else {
  //         // Handle error
  //         console.error("Failed to fetch video source");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching video source:", error);
  //     }
  //   };
  //   fetchVideoSource();
  //   return () => {
  //     // Cleanup if necessary
  //   };
  // }, []);
  // return (
  //   <MediaPlayer
  //     title="Sprite Fight"
  //     src={
  //       "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  //     }
  //   >
  //     <MediaProvider />
  //     <DefaultVideoLayout
  //       thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
  //       icons={defaultLayoutIcons}
  //       noScrubGesture={false}
  //     />
  //   </MediaPlayer>
  // );
};

export default VideoComponent;
