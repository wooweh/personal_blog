import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export type BlogProps = { name: string; description: string; tags: TagProps }
export type TagProps = { [key: string]: string }
/*



*/
export interface BlogSliceState {
  showFilter: boolean
  blog: BlogProps
}

const initialState: BlogSliceState = {
  showFilter: false,
  blog: { name: "", description: "", tags: {} },
}

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload
    },
    setBlogName: (state, action: PayloadAction<string>) => {
      state.blog.name = action.payload
    },
    setBlogDescription: (state, action: PayloadAction<string>) => {
      state.blog.name = action.payload
    },
    setBlogTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.set(state.blog.tags, tagName, tagName)
    },
    setBlog: (state, action: PayloadAction<BlogProps>) => {
      state.blog = action.payload
    },
    resetBlog: state => {
      state.blog = initialState.blog
    },
  },
})

export const {
  setShowFilter,
  setBlogName,
  setBlogDescription,
  setBlog,
  resetBlog,
} = blogSlice.actions

export default blogSlice.reducer
