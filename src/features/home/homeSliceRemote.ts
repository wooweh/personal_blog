import { get, ref, remove, set } from "firebase/database"
import { dbReal } from "../../remote"
import { dbPaths } from "../../remote/dbPaths"
import { CheckInProps } from "./homeSlice"
/*



*/
export async function setCheckInOnDB(checkIn: CheckInProps) {
  return set(ref(dbReal, dbPaths.checkIns.checkIn(checkIn.date)), checkIn)
}
/*



*/
export async function deleteCheckInFromDB(date: string) {
  return remove(ref(dbReal, dbPaths.checkIns.checkIn(date)))
}
/*



*/
