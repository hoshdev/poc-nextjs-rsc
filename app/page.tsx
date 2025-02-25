"use client";

import { getPosts } from "@/lib/getPost";

import { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    console.log("browserUseEffect", typeof window !== "undefined");
    getPosts()
      .then((posts) => setPosts(posts))
      .catch((err) => console.log("err", err));
  }, []);

  console.log("browser", typeof window !== "undefined");

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-4">{post.title}</h2>

              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
