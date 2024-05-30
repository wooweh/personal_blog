import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export type BlogProps = { tags: TagProps }
export type TagProps = { [key: string]: string }
/*



*/
export interface BlogSliceState {
  showFilter: boolean
  blog: BlogProps
  filters: {
    isNewest: boolean
    from: string
    to: string
    tags: TagProps
  }
}

const initialState: BlogSliceState = {
  showFilter: false,
  blog: { tags: {} },
  filters: {
    isNewest: true,
    from: "",
    to: "",
    tags: {},
  },
}

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload
    },
    setBlogTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.set(state.blog.tags, tagName, tagName)
    },
    deleteBlogTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.unset(state.blog.tags, tagName)
    },
    setBlog: (state, action: PayloadAction<BlogProps>) => {
      state.blog = action.payload
    },
    resetBlog: state => {
      state.blog = initialState.blog
    },
  },
})

export const { setShowFilter, setBlog, setBlogTag, deleteBlogTag, resetBlog } =
  blogSlice.actions

export default blogSlice.reducer
