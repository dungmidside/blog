import matter from "gray-matter";
import fs from "fs";
import path from "path";
import remark from "remark";
import remarkHtml from "remark-html";
import highlight from 'remark-highlight.js';
import Post from "../types/Post";

const POST_FOLDER_PATH = path.join(process.cwd(), "posts");

export const getPostFolder = () => fs.readdirSync(POST_FOLDER_PATH);

export const getAllPosts = (): Post[] =>
  getPostFolder().map((p) => {
    const postFile = fs.readFileSync(path.join(POST_FOLDER_PATH, p), "utf8");
    const { data, content } = matter(postFile);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      content,
    };
  });

export const getSlugs = () => getAllPosts().map((p) => p.slug);

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug);
}

export const convertMdToHtml = async (str) => await remark().use(highlight).use(remarkHtml).process(str);
