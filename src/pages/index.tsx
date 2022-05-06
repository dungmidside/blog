import React from "react";
import { getAllPosts } from "../utils/common";
import Post from "../types/Post";
import PostTitle from "../components/PostTitle";
import Header from "../components/Header/Header";
import Resume from "@/pages/resume";
import Blog from "@/pages/blog";
interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  return <Blog posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
