import { describe, expect, it } from "vitest"
import blogReducer, {
  BlogSliceState,
  deleteFilterTag,
  deleteTag,
  resetBlog,
  resetFilters,
  setFilterFrom,
  setFilterIsNewest,
  setFilterTag,
  setFilterTo,
  setTag,
  setTags,
} from "./blogSlice"
/*



*/
describe("core slice", () => {
  const initialState: BlogSliceState = {
    tags: {},
    filters: {
      isNewest: true,
      from: "",
      to: "",
      tags: {},
    },
  }

  it("should handle initial state", () => {
    expect(blogReducer(undefined, { type: "unknown" })).toStrictEqual({
      tags: {},
      filters: {
        isNewest: true,
        from: "",
        to: "",
        tags: {},
      },
    })
  })

  it("should handle setTag", () => {
    const tagName = "myBlog"
    const actual = blogReducer(initialState, setTag(tagName))
    console.log(actual)
    expect(actual.tags[tagName]).toEqual(tagName)
  })

  it("should handle deleteTag", () => {
    const tagName = "tagName"
    const actual = blogReducer(initialState, deleteTag(tagName))
    expect(actual.tags.tagName).toBeUndefined()
  })

  it("should handle setTags", () => {
    const tags = {
      mockTag1: "mockTag1",
      mockTag2: "mockTag2",
    }
    const actual = blogReducer(initialState, setTags(tags))
    expect(actual.tags).toEqual(tags)
  })

  it("should handle setFilterIsNewest", () => {
    const actual = blogReducer(initialState, setFilterIsNewest(true))
    expect(actual.filters.isNewest).toEqual(true)
  })

  it("should handle setFilterFrom", () => {
    const actual = blogReducer(initialState, setFilterFrom("mockFrom"))
    expect(actual.filters.from).toEqual("mockFrom")
  })

  it("should handle setFilterTo", () => {
    const actual = blogReducer(initialState, setFilterTo("mockTo"))
    expect(actual.filters.to).toEqual("mockTo")
  })

  it("should handle setFilterTag", () => {
    const actual = blogReducer(initialState, setFilterTag("mockTag"))
    expect(actual.filters.tags.mockTag).toEqual("mockTag")
  })

  it("should handle deleteFilterTag", () => {
    const actual = blogReducer(initialState, deleteFilterTag("mockTag"))
    expect(actual.filters.tags.mockTag).toBeUndefined()
  })

  it("should handle clearFilters", () => {
    const actual = blogReducer(initialState, resetFilters())
    expect(actual.filters.tags.mockTag).toBeUndefined()
    expect(actual.filters.isNewest).toEqual(true)
    expect(actual.filters.from).toEqual("")
    expect(actual.filters.to).toEqual("")
  })

  it("should handle resetBlog", () => {
    const actual = blogReducer(initialState, resetBlog())
    expect(actual.tags).toEqual({})
  })
})
