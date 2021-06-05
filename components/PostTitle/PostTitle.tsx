import React from "react";
import Link from "next/link";
import styles from './PostTile.module.scss';
import Post from "../../types/Post";

interface PostTitleProps {
  post: Post;
}

const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className={styles.postTitle}>
      <div className={styles.postTitleDate}>{post.date}</div>
      <div className={styles.postTitleText}>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </div>
    </div>
  );
};

export default PostTitle;