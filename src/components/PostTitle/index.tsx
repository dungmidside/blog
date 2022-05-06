import React from "react";
import Link from "next/link";
import styles from './PostTile.module.scss';
import Post from "../../types/Post";

interface PostTitleProps {
  post: Post;
}

const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className="flex gap-10">
      <div className="text-gray-600 w-1/5">{post.date}</div>
      <div className="w-4/5">
        <div className="">
          <Link href={`/blog/${post.slug}`}>
            <a className="font-title text-xl text-red-400 hover:text-red-600">
              {post.title}
            </a>
          </Link>
        </div>
        <div className="text-sm mt-1">{post.des}</div>
      </div>
    </div>
  );
};

export default PostTitle;