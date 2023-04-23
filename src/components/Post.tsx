import Link from "next/link";
import Image from "next/image";

export default function Post({post}: any) {
  const article = post.frontmatter;

  return (
    <div className={"pb-4"}>
      {article.cover_image ? <Image src={article.cover_image} alt={""} height={"250"} width={"250"} /> : <></>}
      <h2 className={"font-semibold text-2xl"}>{article.title}</h2>
      <div className={"text-xs pb-0.5"}>Posted on: {article.date}</div>
      <p className={"pb-0.5 italic"}>{article.excerpt}</p>

      <Link className={"text-sm"} href={`/blog/${post.slug}`}>
        Read More...
      </Link>
    </div>
  )
}