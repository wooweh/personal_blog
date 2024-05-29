import { describe, expect, it } from "vitest"
import coreReducer, {
  CoreSliceState,
  setShowMenu,
  setSystemStatus,
} from "./coreSlice"
/*



*/
describe("core slice", () => {
  const initialState: CoreSliceState = {
    systemStatus: "notBooted",
    showMenu: false,
  }

  it("should handle initial state", () => {
    expect(coreReducer(undefined, { type: "unknown" })).toStrictEqual({
      systemStatus: "notBooted",
      showMenu: false,
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
})
