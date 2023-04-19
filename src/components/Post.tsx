import Link from "next/link";
import Image from "next/image";

export default function Post({post}: any) {
  const article = post.frontmatter;

  return (
    <div className={"border-dotted border-2"}>
      <Image src={article.cover_image} alt={""} height={"500"} width={"500"} />
      <div className={"italic"}>Posted on: {article.date}</div>

      <h3 className={"font-semibold text-xl"}>{article.title}</h3>
      <p>{article.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  )
}