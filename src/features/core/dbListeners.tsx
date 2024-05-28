import { off, onValue, ref } from "firebase/database"
import { useEffect } from "react"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
import { handleAdminDBOnValue, handleBlogDBOnValue } from "./dbListenersUtils"

/*



*/
export function DBListeners() {
  const isSafeToBoot = true
  return (
    <>
      <BlogDBListener />
      <AdminDBListener />
      <PostsDBListener />
    </>
  )
}
/*



*/
function BlogDBListener() {
  const isSafeToSync = true
  useEffect(() => {
    const blogDBRef = ref(dbReal, dbPaths.blog.root)
    if (isSafeToSync) {
      onValue(blogDBRef, handleBlogDBOnValue)
    }
    return () => off(blogDBRef)
  }, [isSafeToSync])
  return <></>
}
/*



*/
function AdminDBListener() {
  const isSafeToSync = true
  useEffect(() => {
    const adminDBRef = ref(dbReal, dbPaths.admin.root)
    if (isSafeToSync) {
      onValue(adminDBRef, handleAdminDBOnValue)
    }
    return () => off(adminDBRef)
  }, [isSafeToSync])
  return <></>
}
/*



*/
function PostsDBListener() {
  const isSafeToSync = true

  useEffect(() => {
    const postsTagsDBRef = ref(dbReal, dbPaths.posts.tags)
    if (isSafeToSync) {
      // TODO: Attach onChildChanged and onChildRemoved listeners for posts tags
    }
    return () => off(postsTagsDBRef)
  }, [isSafeToSync])

  useEffect(() => {
    const postsMetadataDBRef = ref(dbReal, dbPaths.posts.metadata)
    if (isSafeToSync) {
      // TODO: Attach onChildChanged and onChildRemoved listeners for posts metadata
    }
    return () => off(postsMetadataDBRef)
  }, [isSafeToSync])

  useEffect(() => {
    const postsShortContentDBRef = ref(dbReal, dbPaths.posts.shortContent)
    if (isSafeToSync) {
      // TODO: Attach onChildChanged and onChildRemoved listeners for posts short content
    }
    return () => off(postsShortContentDBRef)
  }, [isSafeToSync])

  return <></>
}
/*



*/
