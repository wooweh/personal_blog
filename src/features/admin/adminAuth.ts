import {
  EmailAuthProvider,
  User,
  reauthenticateWithCredential,
  signInWithEmailAndPassword as signInOnAuth,
  signOut as signOutOnAuth,
} from "firebase/auth"
import { auth } from "../../remote"
/*



*/
export async function signIn(email: string, password: string) {
  return signInOnAuth(auth, email, password).then(credential => credential.user)
}
/*



*/
export async function signOut() {
  return signOutOnAuth(auth)
}
/*



*/
