import { createSelector } from "@reduxjs/toolkit"
import { coreSelector } from "./coreSlice"
/*



*/
export const selectShowMenu = createSelector(
  [coreSelector],
  core => core.showMenu,
)
/*



*/
