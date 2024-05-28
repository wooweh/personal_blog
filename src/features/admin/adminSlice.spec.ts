import adminReducer, {
  AdminProps,
  AdminSliceState,
  resetAdmin,
  setAdmin,
  setAdminEmail,
  setAdminName,
  setAuthStatus,
} from "./adminSlice"
/*



*/
describe("admin slice", () => {
  const initialState: AdminSliceState = {
    authStatus: "signedOut",
    admin: { name: "", email: "" },
  }

  it("should handle initial state", () => {
    expect(adminReducer(undefined, { type: "unknown" })).toStrictEqual({
      authStatus: "signedOut",
      admin: { name: "", email: "" },
    })
  })

  it("should handle setAuthStatus", () => {
    const status = "signedIn"
    const actual = adminReducer(initialState, setAuthStatus(status))
    expect(actual.authStatus).toEqual(status)
  })

  it("should handle setAdminName", () => {
    const name = "test"
    const actual = adminReducer(initialState, setAdminName(name))
    expect(actual.admin.name).toEqual(name)
  })

  it("should handle setAdminEmail", () => {
    const email = "test@test.mail"
    const actual = adminReducer(initialState, setAdminEmail(email))
    expect(actual.admin.email).toEqual(email)
  })

  it("should handle setAdmin", () => {
    const mockAdmin: AdminProps = {
      name: "test",
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
