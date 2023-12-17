"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function VideoPlayerComponent() {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
            type: "video/mp4",
          },
        ],
      }}
    />
  );
}
