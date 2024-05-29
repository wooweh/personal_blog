import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
/*



*/
export type SystemStatuses = "booted" | "notBooted" | "booting"
/*



*/
export interface CoreSliceState {
  systemStatus: SystemStatuses
  showMenu: boolean
}

const initialState: CoreSliceState = {
  systemStatus: "notBooted",
  showMenu: false,
}
export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setSystemStatus: (state, action: PayloadAction<SystemStatuses>) => {
      state.systemStatus = action.payload
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload
    },
  },
})

export const { setSystemStatus, setShowMenu } = coreSlice.actions

export const coreSelector = (state: RootState) => state.core

export default coreSlice.reducer
