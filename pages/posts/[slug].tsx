import React from "react";
import { convertMdToHtml, getPostBySlug, getSlugs } from "../../utils/common";

export default function Post(props) {
  const { slug, content, title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
