import { store } from "../../app/store"
import { initSystemBoot, resetSystem } from "../core/coreSliceUtils"
import { signIn, signOut } from "./adminAuth"
import { setAuthStatus } from "./adminSlice"
/*



*/
export function signAdminIn(email: string, password: string) {
  store.dispatch(setAuthStatus("signingIn"))
  signIn(email, password)
    .then(() => {
      store.dispatch(setAuthStatus("signedIn"))
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
