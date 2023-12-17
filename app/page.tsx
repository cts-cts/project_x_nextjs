import Link from "next/link";
import PostsComponent from "./components/posts_component";

const HomePage = async () => {
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return (await res.json()) as [];
  };

  await getPosts();
  return (
    <>
      <PostsComponent />
    </>
  );
};

export default HomePage;
