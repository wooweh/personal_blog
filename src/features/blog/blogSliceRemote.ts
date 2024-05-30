import { get, ref, set } from "firebase/database"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
/*



*/
export async function getBlogFromDB() {
  return get(ref(dbReal, dbPaths.blog.root)).then(snapshot => {
    if (snapshot.exists()) return snapshot.val()
  })
}
/*



*/
export async function setBlogTagOnDB(tag: string) {}
/*



*/
export async function deleteBlogTagOnDB(tag: string) {}
/*



*/
