import { store } from "../../app/store"
import { initSystemBoot, resetSystem } from "../core/coreSliceUtils"
import { signIn, signOut, updateEmailOnAuth } from "./adminAuth"
import {
  AdminProps,
  setAdmin,
  setAdminEmail,
  setAdminName,
  setAuthStatus,
} from "./adminSlice"
import {
  getAdminFromDB,
  setAdminEmailOnDB,
  setAdminNameOnDB,
} from "./adminSliceRemote"
/*



*/
export function signAdminIn(email: string, password: string) {
  store.dispatch(setAuthStatus("signingIn"))
  signIn(email, password)
    .then(() => {
      store.dispatch(setAuthStatus("signedIn"))
      return getAdminFromDB()
    })
    .then((admin: AdminProps) => {
      store.dispatch(setAdmin(admin))
      initSystemBoot()
    })
    .catch(error => {
      store.dispatch(setAuthStatus("signedOut"))
      // TODO: handle error
    })
}
/*



*/
export function signAdminOut() {
  signOut()
    .then(() => {
      store.dispatch(setAuthStatus("signedOut"))
      resetSystem()
    })
    .catch(error => {
      store.dispatch(setAuthStatus("signedIn"))
      // TODO: handle error
    })
}
/*



*/
export function updateAdminName(name: string) {
  setAdminNameOnDB(name)
    .then(() => store.dispatch(setAdminName(name)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
export function updateAdminEmail(email: string, password: string) {
  updateEmailOnAuth(email, password)
    .then(() => setAdminEmailOnDB(email))
    .then(() => store.dispatch(setAdminEmail(email)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
