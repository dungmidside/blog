import React from "react";
import { getAllPosts } from "../utils/common";
import Post from "../types/Post";
import PostTitle from "../components/PostTitle/PostTitle";
import Header from "../components/Header/Header";
import Resume from '@/pages/resume';
interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  return <Resume />
}
