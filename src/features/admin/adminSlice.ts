import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
/*



*/
export type AdminProps = { name: string; email: string }
export type AuthStatuses = "signedOut" | "signingIn" | "signedIn"
/*



*/
export interface AdminSliceState {
  authStatus: AuthStatuses
  admin: AdminProps
}

const initialState: AdminSliceState = {
  authStatus: "signedOut",
  admin: { name: "", email: "" },
}
export const adminSlice = createAppSlice({
  name: "admin",
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatuses>) => {
      state.authStatus = action.payload
    },
    setAdminName: (state, action: PayloadAction<string>) => {
      state.admin.name = action.payload
    },
    setAdminEmail: (state, action: PayloadAction<string>) => {
      state.admin.email = action.payload
    },
    setAdmin: (state, action: PayloadAction<AdminProps>) => {
      state.admin = action.payload
    },
    resetAdmin: state => {
      state.admin = initialState.admin
    },
  },
  selectors: {},
})

export const {
  setAdmin,
  setAuthStatus,
  setAdminName,
  setAdminEmail,
  resetAdmin,
} = adminSlice.actions

export const {} = adminSlice.selectors

export default adminSlice.reducer
