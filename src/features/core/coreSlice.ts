import { PayloadAction, createSlice } from "@reduxjs/toolkit"
/*



*/
export type SystemStatuses = "booted" | "notBooted" | "booting"
/*



*/
export interface CoreSliceState {
  systemStatus: SystemStatuses
}

const initialState: CoreSliceState = {
  systemStatus: "notBooted",
}
export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setSystemStatus: (state, action: PayloadAction<SystemStatuses>) => {
      state.systemStatus = action.payload
    },
  },
  selectors: {},
})

export const { setSystemStatus } = coreSlice.actions

export const {} = coreSlice.selectors

export default coreSlice.reducer
