import { createSelector } from "@reduxjs/toolkit"
import { selectBlog } from "./blogSlice"
import _ from "lodash"
/*



*/
export const selectFilters = createSelector([selectBlog], blog => blog.filters)
/*



*/
export const selectFilterIsNewest = createSelector(
  [selectFilters],
  filters => filters.isNewest,
)
/*



*/
export const selectFilterFromDate = createSelector([selectFilters], filters =>
  Number(filters.from),
)
/*



*/
export const selectFilterToDate = createSelector([selectFilters], filters =>
  Number(filters.to),
)
/*



*/
export const selectFilterTags = createSelector([selectFilters], filters =>
  _.values(filters.tags),
)
/*



*/
export const selectBlogTags = createSelector([selectBlog], blog =>
  _.values(blog.tags),
)
/*



*/
