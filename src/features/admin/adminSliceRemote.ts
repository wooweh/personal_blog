import { get, ref, set } from "firebase/database"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
/*



*/
export async function getAdminFromDB() {
  return get(ref(dbReal, dbPaths.admin.root)).then(snapshot => {
    if (snapshot.exists()) return snapshot.val()
  })
}
/*



*/
export async function setAdminNameOnDB(name: string) {
  return set(ref(dbReal, dbPaths.admin.name), name)
}
/*



*/
export async function setAdminEmailOnDB(email: string) {
  return set(ref(dbReal, dbPaths.admin.email), email)
}
/*



*/
