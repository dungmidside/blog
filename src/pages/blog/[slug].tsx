import Footer from "@/components/Footer/Footer";
import BlogPost from "@/components/Post";
import Post from "@/types/Post";
import { convertMdToHtml, getPostBySlug, getSlugs } from "@/utils/common";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "./blog.module.scss";

export default function BlogPostSlug(post: Post) {
  return <BlogPost post={post} />
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { slug } = props.params as IParams;
  const post = getPostBySlug(slug);
  const htmlContent = await convertMdToHtml(post?.content || '');
  return {
    props: {
      ...post,
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
