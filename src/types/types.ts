export interface Frontmatter {
  title: string,
  author: string,
  category: string,
  date: string,
  bannerImage: string,
  tags: string[],
}

export interface Posts {
  slug: string,
  frontmatter: Frontmatter
}
