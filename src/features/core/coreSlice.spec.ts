import { describe, expect, it } from "vitest"
import coreReducer, { CoreSliceState, setSystemStatus } from "./coreSlice"
/*



*/
describe("core slice", () => {
  const initialState: CoreSliceState = {
    systemStatus: "notBooted",
  }

  it("should handle initial state", () => {
    expect(coreReducer(undefined, { type: "unknown" })).toStrictEqual({
      systemStatus: "notBooted",
    })
  })

  it("should handle setSystemStatus", () => {
    const status = "booted"
    const actual = coreReducer(initialState, setSystemStatus(status))
    expect(actual.systemStatus).toEqual(status)
  })
})
