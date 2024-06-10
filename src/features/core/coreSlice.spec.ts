import { describe, expect, it } from "vitest"
import coreReducer, {
  CoreSliceState,
  setSystemStatus,
  setTheme,
} from "./coreSlice"
/*



*/
describe("core slice", () => {
  const initialState: CoreSliceState = {
    systemStatus: "notBooted",
    theme: "dark",
  }

  it("should handle initial state", () => {
    expect(coreReducer(undefined, { type: "unknown" })).toStrictEqual({
      systemStatus: "notBooted",
      theme: "dark",
    })
  })

  it("should handle setSystemStatus", () => {
    const status = "booted"
    const actual = coreReducer(initialState, setSystemStatus(status))
    expect(actual.systemStatus).toEqual(status)
  })

  it("should handle setTheme", () => {
    const status = "light"
    const actual = coreReducer(initialState, setTheme(status))
    expect(actual.theme).toEqual(status)
  })
})
