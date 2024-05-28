import { store } from "../../app/store"
import {
  PostProps,
  Tags,
  deletePost,
  deleteTag,
  setIsEditing,
  setPostMetadata,
  setPostShortContent,
  setTag,
} from "./postsSlice"
import { v4 as uuidv4 } from "uuid"
import {
  deletePostOnDB,
  deleteTagOnDB,
  setPostContentOnDB,
  setPostMetadataOnDB,
  setPostShortContentOnDB,
  setTagOnDB,
} from "./postsSliceRemote"
/*



*/
export function newPost() {
  store.dispatch(setIsEditing(true))
}
/*



*/
export function editPost() {
  store.dispatch(setIsEditing(true))
}
/*



*/
export async function removePost(postId: string) {
  return deletePostOnDB(postId)
    .then(() => store.dispatch(deletePost(postId)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
export async function createTag(tag: string) {
  return setTagOnDB(tag)
    .then(() => store.dispatch(setTag(tag)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
export async function removeTag(tag: string) {
  return deleteTagOnDB(tag)
    .then(() => store.dispatch(deleteTag(tag)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
export async function createPost(title: string, tags: Tags, content: string) {
  const postId = uuidv4()
  const created = Date.now().toString()
  const metadata = {
    title,
    tags,
    created,
  }
  const shortContent = getShortContent(content)

  return setPostMetadataOnDB(postId, metadata)
    .then(() => setPostShortContentOnDB(postId, shortContent))
    .then(() => setPostContentOnDB(postId, content))
    .then(() => {
      store.dispatch(setPostMetadata({ postId, metadata }))
      store.dispatch(setPostShortContent({ postId, shortContent }))
      store.dispatch(setIsEditing(false))
    })
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
export async function updatePost(
  postId: string,
  metadata: PostProps,
  content?: string,
) {
  if (!!content) {
    const shortContent = getShortContent(content)
    return setPostMetadataOnDB(postId, metadata)
      .then(() => setPostShortContentOnDB(postId, shortContent))
      .then(() => setPostContentOnDB(postId, content))
      .then(() => {
        store.dispatch(setPostMetadata({ postId, metadata }))
        store.dispatch(setPostShortContent({ postId, shortContent }))
        store.dispatch(setIsEditing(false))
      })
      .catch(error => {
        // TODO: handle error
      })
  } else {
    return setPostMetadataOnDB(postId, metadata)
      .then(() => {
        store.dispatch(setPostMetadata({ postId, metadata }))
        store.dispatch(setIsEditing(false))
      })
      .catch(error => {
        // TODO: handle error
      })
  }
}
/*



*/
function getShortContent(content: string) {
  return content.slice(0, 100)
}
/*



*/
