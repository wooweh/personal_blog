import { describe, expect, it } from "vitest"
import blogReducer, {
  BlogProps,
  BlogSliceState,
  deleteBlogTag,
  setBlog,
  setBlogTag,
} from "./blogSlice"
/*



*/
describe("core slice", () => {
  const initialState: BlogSliceState = {
    showFilter: false,
    blog: { tags: {} },
  }

  it("should handle initial state", () => {
    expect(blogReducer(undefined, { type: "unknown" })).toStrictEqual({
      showFilter: false,
      blog: { tags: {} },
    })
  })

  it("should handle setBlogTag", () => {
    const tagName = "myBlog"
    const actual = blogReducer(initialState, setBlogTag(tagName))
    expect(actual.blog.tags.tagName).toEqual(tagName)
  })

  it("should handle deleteBlogTag", () => {
    const tagName = "tagName"
    const actual = blogReducer(initialState, deleteBlogTag(tagName))
    expect(actual.blog.tags.tagName).toBeUndefined()
  })

  it("should handle setBlog", () => {
    const blog: BlogProps = {
      tags: {
        tagName: "tagName",
      },
    }
    const actual = blogReducer(initialState, setBlog(blog))
    expect(actual.blog).toEqual(blog)
  })

  it("should handle resetBlog", () => {
    const actual = blogReducer(initialState, setBlog(initialState.blog))
    expect(actual.blog).toEqual(initialState.blog)
  })
})
