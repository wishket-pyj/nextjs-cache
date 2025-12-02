import getPost from "../api";

const Page = async ({ params }: { params: { page: string } }) => {
  const { page } = await params;
  const post = await getPost(`Page 컴포넌트 ${page}`, Number(page));
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div key={post.id} className="bg-gray-100 p-4 rounded-md">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.body}</p>
      </div>
    </div>
  );
};

export default Page;