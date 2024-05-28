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
  tag: getTagPath,
  metadata: `${postsPath}/metadata`,
  shortContent: `${postsPath}/shortContent`,
  postMetadata: getPostMetadataPath,
  postShortContent: getPostShortContentPath,
  postContent: getPostContentPath,
}
/*



*/
function getTagPath(tagName: string) {
  return `${postsPaths.tags}/${tagName}`
}
/*



*/
function getPostMetadataPath(uuid: string) {
  const postMetadata = `${postsPaths.metadata}/${uuid}`
  return {
    root: postMetadata,
    tags: `${postMetadata}/tags`,
    tag: getPostMetadataTagPath,
  }
}
/*



*/
function getPostMetadataTagPath(tagName: string) {
  return `${postsPaths.metadata}/tags/${tagName}`
}
/*



*/
function getPostShortContentPath(uuid: string) {
  return `${postsPaths.shortContent}/${uuid}`
}
/*



*/
function getPostContentPath(uuid: string) {
  return `${postsPaths}/content/${uuid}`
}
/*



*/
export const dbPaths = {
  blog: blogPaths,
  admin: adminPaths,
  posts: postsPaths,
}
