import { DataSnapshot } from "firebase/database"
import { store } from "../../app/store"
// import { setBlog } from "../blog/blogSlice"
// import { setAdmin } from "../admin/adminSlice"
/*



*/
export function handleBlogDBOnValue(snapshot: DataSnapshot) {
  const blog = snapshot.val()
  // if (!!blog) store.dispatch(setBlog(blog))
}
/*



*/
export function handleAdminDBOnValue(snapshot: DataSnapshot) {
  const admin = snapshot.val()
  // if (!!admin) store.dispatch(setAdmin(admin))
}
/*



*/
export function handlePostsTagsDBOnChildUpdated(snapshot: DataSnapshot) {
  const tags = snapshot.val()
  // TODO: if (!!tags) store.dispatch(setPostsTags(tags))
}
/*



*/
export function handlePostsTagsDBOnChildRemoved(snapshot: DataSnapshot) {
  const tags = snapshot.val()
  // TODO: if (!!tags) store.dispatch(setPostsTags(tags))
}
/*



*/
export function handlePostsMetadataDBOnChildUpdated(snapshot: DataSnapshot) {
  const metadata = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handlePostsMetadataDBOnChildRemoved(snapshot: DataSnapshot) {
  const metadata = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handlePostsShortContentDBOnChildUpdated(
  snapshot: DataSnapshot,
) {
  const shortContent = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handlePostsShortContentDBOnChildRemoved(
  snapshot: DataSnapshot,
) {
  const content = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
