import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
/*



*/
export type BlogProps = { name: string; description: string }
/*



*/
export interface BlogSliceState {
  showInfo: boolean
  showFilter: boolean
  blog: BlogProps
}

const initialState: BlogSliceState = {
  showInfo: false,
  showFilter: false,
  blog: { name: "", description: "" },
}

export const blogSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setShowInfo: (state, action: PayloadAction<boolean>) => {
      state.showInfo = action.payload
    },
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload
    },
    setBlogName: (state, action: PayloadAction<string>) => {
      state.blog.name = action.payload
    },
    setBlogDescription: (state, action: PayloadAction<string>) => {
      state.blog.name = action.payload
    },
    setBlog: (state, action: PayloadAction<BlogProps>) => {
      state.blog = action.payload
    },
    resetBlog: state => {
      state.blog = initialState.blog
    },
  },
  selectors: {},
})

export const {
  setShowInfo,
  setShowFilter,
  setBlogName,
  setBlogDescription,
  setBlog,
  resetBlog,
} = blogSlice.actions

export const {} = blogSlice.selectors

export default blogSlice.reducer
