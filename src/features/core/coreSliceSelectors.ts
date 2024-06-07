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
export const selectTheme = createSelector([coreSelector], core => core.theme)
/*



*/
