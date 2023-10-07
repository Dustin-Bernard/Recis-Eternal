type PostType = {
  _id: string;
  title: string;
  desc: string;
  cover: string;
  content: string;
  createdAt: string;
  author: {
    username: string;
  };
};



import { useEffect, useState } from "react";
import Post from "../components/Post";



export default function NewsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/post')
      .then(response => response.json())
      .then(postsData => {
        setPosts(postsData);
      });
  }, []);




  return (<>
    {posts.length > 0 && posts.map(post => (
      <Post _id={post._id}
      title={post.title}
      desc={post.desc}
      cover={post.cover}
      content={post.content}
      createdAt={post.createdAt}
      author={post.author}/>
    ))}
  </>)
};


