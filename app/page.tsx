import Link from "next/link";
import getPost from "./api";
import Post from "./Post";

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = (await searchParams).page;
  console.time("Home 컴포넌트");
  // const post = await getPost();
  const post = await getPost(page);
  console.timeEnd("Home 컴포넌트");

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <div key={post.id} className="bg-gray-100 p-4 rounded-md">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>
      <Post page={page}/>
      {Array.from({ length: 10 }).map((_, index) => (
        <Link href={`/?page=${index}`} key={index}>
          <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-2xl font-bold">Page {index}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;