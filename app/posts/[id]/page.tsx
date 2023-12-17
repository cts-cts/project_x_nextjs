import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Metadata, ResolvingMetadata } from "next";

const getSinglePost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return (await res.json()) as Post;
};

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await getSinglePost(params.id);

//   return {
//     title: post.title,
//     openGraph: {},
//   };
// }

const SinglePostPage = async ({ params }: Props) => {
  const post = await getSinglePost(params.id);

  return (
    <>
      <Card>
        <CardBody>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default SinglePostPage;
