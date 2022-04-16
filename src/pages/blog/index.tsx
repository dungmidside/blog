import PostTitle from '@/components/PostTitle/PostTitle';
import { getAllPosts } from '@/utils/common';
import React from 'react';

const Blog = ({ posts }) => {
  return (
    <div>
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