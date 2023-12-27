import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Metadata, ResolvingMetadata } from "next";

const getSinglePost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(res.status);

  const xxx = (await res.json()) as Post;

  return xxx;
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
  console.log(post.title);

  return (
    <>
      <Card>
        <CardBody>
          <Text>{`${post.title}`}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default SinglePostPage;
