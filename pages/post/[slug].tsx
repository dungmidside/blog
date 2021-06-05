import React from "react";
import { convertMdToHtml, getPostBySlug, getSlugs } from "../../utils/common";
import styles from "./post.module.scss";
import Footer from "../../components/Footer/Footer";

export default function Post(props) {
  const { slug, content, title } = props;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <span className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps(props) {
  const { slug } = props.params;
  const post = getPostBySlug(slug);
  const htmlContent = await convertMdToHtml(post.content);
  return {
    props: {
      slug: slug,
      title: post.title,
      content: htmlContent.toString(),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getSlugs().map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
