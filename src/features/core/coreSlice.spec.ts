import { describe, expect, it } from "vitest"
import coreReducer, {
  CoreSliceState,
  setShowMenu,
  setSystemStatus,
  setTheme,
} from "./coreSlice"
/*



*/
describe("core slice", () => {
  const initialState: CoreSliceState = {
    systemStatus: "notBooted",
    showMenu: false,
    theme: "dark",
  }

  it("should handle initial state", () => {
    expect(coreReducer(undefined, { type: "unknown" })).toStrictEqual({
      systemStatus: "notBooted",
      showMenu: false,
      theme: "dark",
    })
  })

  it("should handle setSystemStatus", () => {
    const status = "booted"
    const actual = coreReducer(initialState, setSystemStatus(status))
    expect(actual.systemStatus).toEqual(status)
  })

  it("should handle setShowMenu", () => {
    const status = true
    const actual = coreReducer(initialState, setShowMenu(status))
    expect(actual.showMenu).toEqual(status)
  })

  it("should handle setTheme", () => {
    const status = "light"
    const actual = coreReducer(initialState, setTheme(status))
    expect(actual.theme).toEqual(status)
  })
})
