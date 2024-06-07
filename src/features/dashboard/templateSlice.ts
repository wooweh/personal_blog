import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface TemplateSliceState {}

const initialState: TemplateSliceState = {}

export const templateSlice = createAppSlice({
  name: "template",
  initialState,
  reducers: create => ({
    reducer: create.reducer(state => {}),
    asyncReducer: create.asyncThunk(async (amount: number) => {}, {
      pending: state => {},
      fulfilled: (state, action) => {},
      rejected: state => {},
    }),
  }),
  selectors: {},
})

export const {} = templateSlice.actions

export const {} = templateSlice.selectors

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }
