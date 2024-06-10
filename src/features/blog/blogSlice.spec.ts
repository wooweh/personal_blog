import { describe, expect, it } from "vitest"
import blogReducer, {
  BlogProps,
  BlogSliceState,
  deleteTag,
  setBlog,
  setTag,
} from "./blogSlice"
/*



*/
describe("core slice", () => {
  const initialState: BlogSliceState = {
    showFilter: false,
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
      showFilter: false,
      blog: { tags: {} },
    })
  })

  it("should handle setTag", () => {
    const tagName = "myBlog"
    const actual = blogReducer(initialState, setTag(tagName))
    expect(actual.tags.tagName).toEqual(tagName)
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
    const actual = blogReducer(initialState, setBlog(tags))
    expect(actual.tags).toEqual(tags)
  })

  it("should handle resetBlog", () => {
    const actual = blogReducer(initialState, setBlog(initialState.tags))
    expect(actual.tags).toEqual(initialState.tags)
  })
})
