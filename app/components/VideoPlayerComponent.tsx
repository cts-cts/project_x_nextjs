"use client";
import { Box, Center } from "@chakra-ui/react";
import Plyr from "plyr-react";
// import "plyr-react/plyr.css";

const VideoPlayerComponent = () => {
  if (typeof window !== "undefined") {
    return (
      <Center>
        <Box marginTop={50} maxW="700px">
          <Plyr
            autoPlay={true}
            source={{
              type: "video",
              poster:
                "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
              sources: [
                {
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                  type: "video/mp4",
                },
              ],
              tracks: [
                {
                  kind: "subtitles",
                  label: "English",

                  src: "/subtitles/sub.en.vtt",
                  default: true,
                  srcLang: "en",
                },
              ],
            }}
          />
        </Box>
      </Center>
    );
  } else {
    return <div>Video player is not available</div>;
  }
};

export default VideoPlayerComponent;
