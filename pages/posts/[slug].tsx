import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

export default function Post(props) {
  const { slug, content } = props;
  console.log({ slugProps: slug });
  console.log({ contentProps: content });
  return (
    <div>
      <h1>{slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  );
};

function convertToSlug(str) {
  return str
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'')
    ;
}

export async function getStaticProps(props) {
  console.log({ staticProps: props })
  const { slug, content } = props.params;
  const htmlContent = await remark().use(remarkHtml).process(content);
  return {
    props: {
      slug: slug,
      content: htmlContent.toString(),
    }
  }
}

export async function getStaticPaths() {
  const postFolderPath = path.join(process.cwd(), 'posts');
  const posts = fs.readdirSync(postFolderPath);
  const postProps = posts.map(post => {
    const postContent = fs.readFileSync(path.join(postFolderPath, post), 'utf8');
    const { data, content } = matter(postContent);
    return {
      slug: data.slug,
      content,
    }
  })
  return {
    paths: postProps.map(post => ({
      params: {
        slug: post.slug,
        content: post.content,
      }
    })),
    // paths: [{ params: { slug: "123" }}],
    fallback: false,
  }
}