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
/*



*/
const tagsPath = `${rootPath}/tags`
/*



*/
const adminPath = `${rootPath}/admin`
const adminPaths = {
  root: adminPath,
  email: `${adminPath}/email`,
}
/*



*/
const metadataPath = `${rootPath}/metadata`
/*



*/
const shortContentPath = `${rootPath}/shortContent`
/*



*/
const fullContentPath = `${rootPath}/fullContent`
const fullContentPaths = {
  root: fullContentPath,
  post: getPostFullContentPath,
}
/*



*/
function getPostFullContentPath(uuid: string) {
  return {
    content: `${rootPath}/fullContent/${uuid}`,
  }
}
/*



*/
export const dbPaths = {
  name: namePath,
  description: descriptionPath,
  checkIns: checkInsPath,
  tags: tagsPath,
  metadata: metadataPath,
  shortContent: shortContentPath,
  fullContent: fullContentPaths,
}
