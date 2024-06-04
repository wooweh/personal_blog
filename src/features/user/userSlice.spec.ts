import userReducer, { UserSliceState, setAuthStatus } from "./userSlice"
/*



*/
describe("user slice", () => {
  const initialState: UserSliceState = {
    authStatus: "signedOut",
  }

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toStrictEqual({
      authStatus: "signedOut",
    })
  })

  it("should handle setAuthStatus", () => {
    const status = "signedIn"
    const actual = userReducer(initialState, setAuthStatus(status))
    expect(actual.authStatus).toEqual(status)
  })
})
