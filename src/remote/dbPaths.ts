/*



*/
const rootPath = import.meta.env.VITE_DB_ROOT_PATH
/*



*/
const blogPath = `${rootPath}/blog`
const blogPaths = {
  root: blogPath,
  name: `${blogPath}/name`,
}
/*



*/
const adminPath = `${rootPath}/admin`
const adminPaths = {
  root: adminPath,
  name: `${adminPath}/name`,
  email: `${adminPath}/email`,
}
/*



*/
const postsPath = `${rootPath}/posts`
const postsPaths = {
  root: postsPath,
  tags: `${postsPath}/tags`,
  metadata: `${postsPath}/metadata`,
  shortContent: `${postsPath}/shortContent`,
  postContent: getPostContentPath,
}
/*



*/
function getPostContentPath(uuid: string) {
  return {
    content: `${rootPath}/posts/content/${uuid}`,
  }
}
/*



*/
export const dbPaths = {
  blog: blogPaths,
  admin: adminPaths,
  posts: postsPaths,
}
