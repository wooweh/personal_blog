import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
/*



*/
export type SystemStatuses = "booted" | "notBooted" | "booting"
export type Themes = "light" | "dark" | "calm"
/*



*/
export interface CoreSliceState {
  systemStatus: SystemStatuses
  showMenu: boolean
  theme: Themes
}

const initialState: CoreSliceState = {
  systemStatus: "notBooted",
  showMenu: false,
  theme: "dark",
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
    setTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload
    },
  },
})

export const { setSystemStatus, setShowMenu, setTheme } = coreSlice.actions

export const coreSelector = (state: RootState) => state.core

export default coreSlice.reducer
