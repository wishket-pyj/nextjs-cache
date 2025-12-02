
import { cache } from "react";

// pape는 cache_key
// const getPost = cache(async (page:string) => {
//   console.log('cached getPost 호출')
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
  
//   return data[page];
// });

const getPost = async (page:string) => {
  console.log('getPost 호출')
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data[page];
}

export default getPost;