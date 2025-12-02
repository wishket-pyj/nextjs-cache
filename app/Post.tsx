import getPost from "./api";

const Post = async ({page}: {page: string}) => {
  console.time("Post 컴포넌트");
  const post = await getPost(page);
  console.timeEnd("Post 컴포넌트");

  return (
    <div>
      <div key={post.id} className="bg-red-100 p-4 rounded-md">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;