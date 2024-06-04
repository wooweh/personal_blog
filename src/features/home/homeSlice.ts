import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export interface HomeSliceState {
  name: string
  description: string
}

const initialState: HomeSliceState = {
  name: "",
  description: "",
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
  },
})

export const { setName, setDescription } = homeSlice.actions

export default homeSlice.reducer
