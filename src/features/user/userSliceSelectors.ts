import { createSelector } from "@reduxjs/toolkit"
import { userSelector } from "./userSlice"

/*



*/
export const selectIsSigningIn = createSelector(
  [userSelector],
  user => user.authStatus === "signingIn",
)
/*



*/
export const selectIsSignedIn = createSelector(
  [userSelector],
  user => user.authStatus === "signedIn",
)
/*



*/
