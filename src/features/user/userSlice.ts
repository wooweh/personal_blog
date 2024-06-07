import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
/*



*/
export type AuthStatuses = "signedOut" | "signingIn" | "signedIn"
/*



*/
export interface UserSliceState {
  authStatus: AuthStatuses
}

const initialState: UserSliceState = {
  authStatus: "signedOut",
}
export const userSlice = createAppSlice({
  name: "admin",
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatuses>) => {
      state.authStatus = action.payload
    },
  },
})

export const { setAuthStatus } = userSlice.actions

export const userSelector = (state: any) => state.admin

export default userSlice.reducer
