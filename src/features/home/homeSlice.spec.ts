import { describe, expect, it } from "vitest"
import homeReducer, {
  HomeSliceState,
  setDescription,
  setName,
} from "./homeSlice"
/*



*/
describe("home slice", () => {
  const initialState: HomeSliceState = {
    name: "",
    description: "",
  }

  it("should handle initial state", () => {
    expect(homeReducer(undefined, { type: "unknown" })).toStrictEqual({
      name: "",
      description: "",
    })
  })

  it("should handle setName", () => {
    const name = "TestName"
    const actual = homeReducer(initialState, setName(name))
    expect(actual.name).toEqual(name)
  })

  it("should handle setDescription", () => {
    const description = "Test Description"
    const actual = homeReducer(initialState, setDescription(description))
    expect(actual.description).toEqual(description)
  })
})
