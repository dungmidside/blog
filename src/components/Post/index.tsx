import Footer from "@/components/Footer/Footer";
import Post from "@/types/Post";
import { convertMdToHtml, getPostBySlug, getSlugs } from "@/utils/common";
import css from './post.module.scss';

export default function BlogPost({ post }: { post: Post }) {
  const { slug, content, title, date } = post;

  return (
    <article className={css.wrapper}>
      <header>
        <h1 className="font-title text-3xl text-red-400">{title}</h1>
        <div className="mt-3 text-sm">{date}</div>
      </header>

      <div className="mt-8 font-content">
        <span
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Footer />
    </article>
  );
}
