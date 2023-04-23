import fs from "fs"
import path from "path"
import matter from "gray-matter";
import Post from "../components/Post";
import {sortByDate} from "@/utils";

export default function Home({posts}: any) {

  return (
    <div className={"pt-10 px-2"}>
      <div className={"pt-3 pb-12"}>
        {posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'));
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("src/posts", filename), "utf-8");

    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
