import React from "react";
import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "../utils/common";

export default function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {posts.map((p) => (
        <div>
          <Link key={p.slug} href={`/posts/${p.slug}`}>
            {p.title}
          </Link>
        </div>
      ))}
    </div>
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
