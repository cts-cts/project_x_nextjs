import { Card, CardBody, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostsComponent = async () => {
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return (await res.json()) as Post[];
  };
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardBody>
            <Text>{post.title}</Text>
            <Link href={`/posts/${post.id}`}>
              <Button colorScheme="blue">Read More</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default PostsComponent;
