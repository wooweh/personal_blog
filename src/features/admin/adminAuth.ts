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
export async function updateEmailOnAuth(newEmail: string, password: string) {
  // TODO: Update email on auth
}
/*



*/
export async function reauthenticate(user: User, password: string) {
  const email = user.email as string
  const credentials = EmailAuthProvider.credential(email, password)
  return reauthenticateWithCredential(user, credentials)
}
/*



*/
