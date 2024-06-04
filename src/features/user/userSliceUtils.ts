import { store } from "../../app/store"
import { initSystemBoot, resetSystem } from "../core/coreSliceUtils"
import { signIn, signOut } from "./userAuth"
import { setAuthStatus } from "./userSlice"
/*



*/
export function signUserIn(email: string, password: string) {
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
export function signUserOut() {
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
