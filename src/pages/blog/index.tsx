import PostTitle from "@/components/PostTitle";
import Post from "@/types/Post";
import { getAllPosts } from "@/utils/common";
import React from "react";

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {posts.map((p) => (
        <PostTitle post={p} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
