import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
/*



*/
export type AuthStatuses = "signedOut" | "signingIn" | "signedIn"
/*



*/
export interface AdminSliceState {
  authStatus: AuthStatuses
}

const initialState: AdminSliceState = {
  authStatus: "signedOut",
}
export const adminSlice = createAppSlice({
  name: "admin",
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatuses>) => {
      state.authStatus = action.payload
    },
  },
})

export const { setAuthStatus } = adminSlice.actions

export const adminSelector = (state: any) => state.admin

export default adminSlice.reducer
