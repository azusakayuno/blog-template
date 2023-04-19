import Link from "next/link";
import Image from "next/image";

export default function Post({post}: any) {
  const article = post.frontmatter;

  return (
    <div>
      <Image src={article.cover_image} alt={""} height={"500"} width={"500"} />
      <div>Posted on: {article.date}</div>

      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  )
}