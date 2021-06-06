import React from "react";
import { getAllPosts } from "../utils/common";
import Post from "../types/Post";
import PostTitle from "../components/PostTitle/PostTitle";
import Header from "../components/Header/Header";

interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      {posts.map((p) => (
        <PostTitle post={p} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
