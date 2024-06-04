import { DataSnapshot } from "firebase/database"
import { store } from "../../app/store"
// import { setBlog } from "../blog/blogSlice"
// import { setAdmin } from "../admin/adminSlice"
/*



*/
export function handleTagsDBOnChildUpdated(snapshot: DataSnapshot) {
  const tags = snapshot.val()
  // TODO: if (!!tags) store.dispatch(setPostsTags(tags))
}
/*



*/
export function handleTagsDBOnChildRemoved(snapshot: DataSnapshot) {
  const tags = snapshot.val()
  // TODO: if (!!tags) store.dispatch(setPostsTags(tags))
}
/*



*/
export function handleMetadataDBOnChildUpdated(snapshot: DataSnapshot) {
  const metadata = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handleMetadataDBOnChildRemoved(snapshot: DataSnapshot) {
  const metadata = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handleShortContentDBOnChildUpdated(snapshot: DataSnapshot) {
  const shortContent = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
export function handleShortContentDBOnChildRemoved(snapshot: DataSnapshot) {
  const content = snapshot.val()
  // TODO: if (!!metadata) store.dispatch(setPostsMetadata(metadata))
}
/*



*/
