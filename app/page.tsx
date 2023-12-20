import dynamic from "next/dynamic";
// import "../app/globals.css";
import "plyr-react/plyr.css";
const VideoPlayerComponent = dynamic(
  () => import("./components/VideoPlayerComponent"),
  { ssr: false }
);

const HomePage = async () => {
  return (
    <>
      <VideoPlayerComponent />
    </>
  );
};

export default HomePage;
