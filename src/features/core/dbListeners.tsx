import { off, onValue, ref } from "firebase/database"
import { useEffect } from "react"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
/*



*/
export function DBListeners() {
  const isSafeToBoot = true
  return <></>
}
/*



*/
function HomeDBListener() {
  const isSafeToSync = true
  useEffect(() => {
    // const blogDBRef = ref(dbReal, dbPaths)
    // if (isSafeToSync) {
    //   onValue(blogDBRef, handleBlogDBOnValue)
    // }
    // return () => off(blogDBRef)
  }, [isSafeToSync])
  return <></>
}
/*



*/
function BlogDBListener() {
  const isSafeToSync = true
  useEffect(() => {
    // const tagsDBRef = ref(dbReal, dbPaths)
    // if (isSafeToSync) {
    //   // TODO: Attach onChildChanged and onChildRemoved listeners for posts tags
    // }
    // return () => off(tagsDBRef)
  }, [isSafeToSync])

  useEffect(() => {
    // const metadataDBRef = ref(dbReal, dbPaths)
    // if (isSafeToSync) {
    //   // TODO: Attach onChildChanged and onChildRemoved listeners for posts metadata
    // }
    // return () => off(metadataDBRef)
  }, [isSafeToSync])

  useEffect(() => {
    // const shortContentDBRef = ref(dbReal, dbPaths)
    // if (isSafeToSync) {
    //   // TODO: Attach onChildChanged and onChildRemoved listeners for posts short content
    // }
    // return () => off(shortContentDBRef)
  }, [isSafeToSync])

  return <></>
}
/*



*/
