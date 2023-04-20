import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function InnerPage({frontMatter: {title, date}, slug, content}: any) {

  return (
    <>
      <Link href={"/"}>
        Go Back
      </Link>
      <div>
        <h1>
          {title}
        </h1>
        <div className={"italic"}>
          Posted on: {date}
        </div>
        <div>
          <ReactMarkdown
            children={content}
            className={'markdown-body'}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');

                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => (
    {
      params: {
        slug: filename.replace(".md", "")
      }
    }
  ))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}: any) {
  const markdownWithMeta = fs.readFileSync(path.join("src/posts", slug + ".md"), "utf-8");

  const {data: frontMatter, content} = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content
    }
  }
}