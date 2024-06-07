import { describe, expect, it } from "vitest"
import homeReducer, {
  CheckInProps,
  Emotions,
  HomeSliceState,
  deleteCheckIn,
  setCheckIn,
  setDescription,
  setName,
} from "./homeSlice"
/*



*/
describe("home slice", () => {
  const initialState: HomeSliceState = {
    name: "",
    description: "",
    checkIns: {},
  }

  const checkInDate = Date.now().toLocaleString()

  const mockState: HomeSliceState = {
    name: "TestName",
    description: "Test Description",
    checkIns: {
      checkInDate: {
        date: checkInDate,
        emotions: ["joy", "calm"],
        cause: "Good things happened.",
      },
    },
  }

  it("should handle initial state", () => {
    expect(homeReducer(undefined, { type: "unknown" })).toStrictEqual({
      name: "",
      description: "",
      checkIns: {},
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

  it("should handle setCheckIn", () => {
    const date = Date.now().toLocaleString()
    const emotions: Emotions[] = ["joy", "calm"]
    const cause = "Good things happened."
    const checkIn: CheckInProps = {
      date,
      emotions,
      cause,
    }
    const actual = homeReducer(initialState, setCheckIn(checkIn))
    const checkIns = actual.checkIns
    expect(checkIns[date as keyof typeof checkIns]).toEqual(checkIn)
  })

  it("should handle deleteCheckIn", () => {
    const actual = homeReducer(mockState, deleteCheckIn(checkInDate))
    const checkIns = actual.checkIns
    expect(checkIns[checkInDate as keyof typeof checkIns]).toBeUndefined()
  })
})
