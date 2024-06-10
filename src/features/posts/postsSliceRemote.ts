import { ref, remove, set, update } from "firebase/database"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
import _ from "lodash"
/*



*/
export async function setTagOnDB(tag: string) {
  return set(ref(dbReal, dbPaths.posts.tag(tag)), tag)
}
/*



*/
export async function deleteTagOnDB(tag: string) {
  return remove(ref(dbReal, dbPaths.posts.tag(tag)))
}
/*



*/
export async function setPostMetadataOnDB(postId: string, metadata: any) {
  return set(ref(dbReal, dbPaths.posts.postMetadata(postId).root), metadata)
}
/*



*/
export async function setPostShortContentOnDB(
  postId: string,
  shortContent: string,
) {
  return set(ref(dbReal, dbPaths.posts.postShortContent(postId)), shortContent)
}
/*



*/
export async function setPostContentOnDB(postId: string, content: string) {
  return set(ref(dbReal, dbPaths.posts.postContent(postId)), content)
}
/*



*/
export async function deletePostOnDB(postId: string) {
  const PostMetadataPath = dbPaths.posts.postMetadata(postId).root
  const postShortContentPath = dbPaths.posts.postShortContent(postId)
  const PostContentPath = dbPaths.posts.postContent(postId)

  const updates = {
    [postShortContentPath]: null,
    [PostContentPath]: null,
    [PostMetadataPath]: null,
  }
  return update(ref(dbReal), updates)
}
/*



*/
export async function deleteTagFromPostsOnDB(postIds: string[], tag: string) {
  const updates = {}
  for (const postId of postIds) {
    const path = dbPaths.posts.postMetadata(postId).tag(tag)
    _.set(updates, path, null)
  }
  return update(ref(dbReal), updates)
}
/*



*/
/*



*/
