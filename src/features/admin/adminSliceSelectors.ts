import { createSelector } from "@reduxjs/toolkit"
import { adminSelector } from "./adminSlice"

/*



*/
export const selectIsSigningIn = createSelector(
  [adminSelector],
  admin => admin.authStatus === "signingIn",
)
/*



*/
export const selectIsSignedIn = createSelector(
  [adminSelector],
  admin => admin.authStatus === "signedIn",
)
/*



*/
