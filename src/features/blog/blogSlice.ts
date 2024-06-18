import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
/*



*/
export type TagProps = { [key: string]: string }
/*



*/
export interface BlogSliceState {
  tags: TagProps
  filters: {
    isNewest: boolean
    from: string
    to: string
    tags: TagProps
  }
}

const initialState: BlogSliceState = {
  tags: {
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    tag4: "tag4",
    tag5: "tag5",
  },
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
    setFilterIsNewest: (state, action: PayloadAction<boolean>) => {
      state.filters.isNewest = action.payload
    },
    setFilterFrom: (state, action: PayloadAction<string>) => {
      state.filters.from = action.payload
    },
    setFilterTo: (state, action: PayloadAction<string>) => {
      state.filters.to = action.payload
    },
    setFilterTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.set(state.filters.tags, tagName, tagName)
    },
    deleteFilterTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.unset(state.filters.tags, tagName)
    },
    resetFilters: state => {
      state.filters = initialState.filters
    },
    resetBlog: state => {
      state.tags = {}
    },
  },
})

export const {
  setTag,
  deleteTag,
  setTags,
  setFilterIsNewest,
  setFilterFrom,
  setFilterTo,
  setFilterTag,
  deleteFilterTag,
  resetFilters,
  resetBlog,
} = blogSlice.actions

export const selectBlog = (state: any) => state.blog

export default blogSlice.reducer
