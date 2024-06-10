import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export type TagProps = { [key: string]: string }
/*



*/
export interface BlogSliceState {
  showFilter: boolean
  tags: TagProps
  filters: {
    isNewest: boolean
    from: string
    to: string
    tags: TagProps
  }
}

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

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload
    },
    setTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.set(state.tags, tagName, tagName)
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.unset(state.tags, tagName)
    },
    setTags: (state, action: PayloadAction<TagProps>) => {
      state.tags = action.payload
    },
    resetBlog: state => {
      state.tags = {}
    },
  },
})

export const { setShowFilter, setTag, deleteTag, setTags, resetBlog } =
  blogSlice.actions

export default blogSlice.reducer
