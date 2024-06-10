import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export type CheckInsProps = { [key: string]: CheckInProps }
export type CheckInProps = {
  date: string
  emotions: Emotions[]
  cause: string
}
export type Emotions =
  | "anger"
  | "sadness"
  | "joy"
  | "calm"
  | "excitement"
  | "anxiety"
  | "stress"
/*



*/
export interface HomeSliceState {
  name: string
  checkIns: CheckInProps | {}
}

const initialState: HomeSliceState = {
  name: "",
  checkIns: {},
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setCheckIn: (state, action: PayloadAction<CheckInProps>) => {
      _.set(state.checkIns, action.payload.date, action.payload)
    },
    deleteCheckIn: (state, action: PayloadAction<string>) => {
      _.unset(state.checkIns, action.payload)
    },
  },
})

export const { setName, setCheckIn, deleteCheckIn } = homeSlice.actions

export default homeSlice.reducer
