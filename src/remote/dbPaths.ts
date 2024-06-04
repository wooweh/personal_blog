/*



*/
const rootPath = import.meta.env.VITE_DB_ROOT_PATH
/*



*/
const namePath = `${rootPath}/name`
/*



*/
const descriptionPath = `${rootPath}/description`
/*



*/
const checkInsPath = `${rootPath}/checkIns`
const checkInsPaths = {
  root: checkInsPath,
  checkIn: getCheckInPath,
}
function getCheckInPath(date: string) {
  return `${checkInsPath}/${date}`
}
/*



*/
const tagsPath = `${rootPath}/tags`
const tagsPaths = {
  root: tagsPath,
  tag: getTagPath,
}
function getTagPath(name: string) {
  return `${tagsPath}/${name}`
}
/*



*/
const metadataPath = `${rootPath}/metadata`
const metadataPaths = {
  root: metadataPath,
  post: getPostMetadataPath,
}
function getPostMetadataPath(uuid: string) {
  return `${metadataPath}/${uuid}`
}
/*



*/
const shortContentPaths = {
  root: `${rootPath}/shortContent`,
  post: getPostShortContentPath,
}
function getPostShortContentPath(uuid: string) {
  return `${rootPath}/shortContent/${uuid}`
}
/*



*/
const fullContentPaths = {
  root: `${rootPath}/fullContent`,
  post: getPostFullContentPath,
}
function getPostFullContentPath(uuid: string) {
  return `${rootPath}/fullContent/${uuid}`
}
/*



*/
export const dbPaths = {
  name: namePath,
  description: descriptionPath,
  checkIns: checkInsPaths,
  tags: tagsPaths,
  metadata: metadataPaths,
  shortContent: shortContentPaths,
  fullContent: fullContentPaths,
}
