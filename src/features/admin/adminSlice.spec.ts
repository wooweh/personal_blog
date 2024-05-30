import adminReducer, {
  AdminProps,
  AdminSliceState,
  resetAdmin,
  setAdmin,
  setAdminEmail,
  setAuthStatus,
} from "./adminSlice"
/*



*/
describe("admin slice", () => {
  const initialState: AdminSliceState = {
    authStatus: "signedOut",
    admin: { email: "" },
  }

  it("should handle initial state", () => {
    expect(adminReducer(undefined, { type: "unknown" })).toStrictEqual({
      authStatus: "signedOut",
      admin: { email: "" },
    })
  })

  it("should handle setAuthStatus", () => {
    const status = "signedIn"
    const actual = adminReducer(initialState, setAuthStatus(status))
    expect(actual.authStatus).toEqual(status)
  })

  it("should handle setAdminEmail", () => {
    const email = "test@test.mail"
    const actual = adminReducer(initialState, setAdminEmail(email))
    expect(actual.admin.email).toEqual(email)
  })

  it("should handle setAdmin", () => {
    const mockAdmin: AdminProps = {
      email: "test@test.mail",
    }
    const actual = adminReducer(initialState, setAdmin(mockAdmin))
    expect(actual.admin).toEqual(mockAdmin)
  })

  it("should handle resetAdmin", () => {
    const actual = adminReducer(initialState, resetAdmin())
    expect(actual).toStrictEqual(initialState)
  })
})
