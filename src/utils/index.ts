export const sortByDate = (a: any, b: any) => {
  // @ts-ignore
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}