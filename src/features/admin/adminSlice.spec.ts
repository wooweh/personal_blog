import adminReducer, { AdminSliceState, setAuthStatus } from "./adminSlice"
/*



*/
describe("admin slice", () => {
  const initialState: AdminSliceState = {
    authStatus: "signedOut",
  }

  it("should handle initial state", () => {
    expect(adminReducer(undefined, { type: "unknown" })).toStrictEqual({
      authStatus: "signedOut",
    })
  })

  it("should handle setAuthStatus", () => {
    const status = "signedIn"
    const actual = adminReducer(initialState, setAuthStatus(status))
    expect(actual.authStatus).toEqual(status)
  })
})
