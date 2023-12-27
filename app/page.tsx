// import dynamic from "next/dynamic";
// import "../app/globals.css";
// import "plyr-react/plyr.css";
import PostsComponent from "./components/posts_component";
// const VideoPlayerComponent = dynamic(
//   () => import("./components/VideoPlayerComponent"),
//   { ssr: false }
// );

const HomePage = async () => {
  return (
    <>
      <PostsComponent />
    </>
  );
};

export default HomePage;
