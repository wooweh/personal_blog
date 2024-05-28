import { describe, expect, it } from "vitest"
import blogReducer, {
  BlogProps,
  BlogSliceState,
  setBlog,
  setBlogDescription,
  setBlogName,
  setShowFilter,
  setShowInfo,
} from "./blogSlice"
/*



*/
describe("core slice", () => {
  const initialState: BlogSliceState = {
    showFilter: false,
    showInfo: false,
    blog: { name: "", description: "" },
  }

  it("should handle initial state", () => {
    expect(blogReducer(undefined, { type: "unknown" })).toStrictEqual({
      showFilter: false,
      showInfo: false,
      blog: { name: "", description: "" },
    })
  })

  it("should handle setShowFilter", () => {
    const status = true
    const actual = blogReducer(initialState, setShowFilter(status))
    expect(actual.showFilter).toEqual(status)
  })

  it("should handle setShowInfo", () => {
    const status = true
    const actual = blogReducer(initialState, setShowInfo(status))
    expect(actual.showInfo).toEqual(status)
  })

  it("should handle setBlogName", () => {
    const name = "myBlog"
    const actual = blogReducer(initialState, setBlogName(name))
    expect(actual.blog.name).toEqual(name)
  })

  it("should handle setBlogDescription", () => {
    const description = "this is my blog"
    const actual = blogReducer(initialState, setBlogDescription(description))
    expect(actual.blog.description).toEqual(description)
  })

  it("should handle setBlog", () => {
    const blog: BlogProps = {
      name: "myBlog",
      description: "this is my blog",
    }
    const actual = blogReducer(initialState, setBlog(blog))
    expect(actual.blog).toEqual(blog)
  })

  it("should handle resetBlog", () => {
    const actual = blogReducer(initialState, setBlog(initialState.blog))
    expect(actual.blog).toEqual(initialState.blog)
  })
})
