import { store } from "../../app/store"
import {
  deleteFilterTag,
  resetFilters,
  setFilterFrom,
  setFilterIsNewest,
  setFilterTag,
  setFilterTo,
} from "./blogSlice"

/*



*/
export function filterByNewest(isNewest: boolean) {
  store.dispatch(setFilterIsNewest(isNewest))
}
/*



*/
export function updateFilterFromDate(timestamp: string) {
  store.dispatch(setFilterFrom(timestamp))
}
/*



*/
export function updateFilterToDate(timestamp: string) {
  store.dispatch(setFilterTo(timestamp))
}
/*



*/
export function addFilterTag(tagName: string) {
  store.dispatch(setFilterTag(tagName))
}
/*



*/
export function removeFilterTag(tagName: string) {
  store.dispatch(deleteFilterTag(tagName))
}
/*



*/
export function clearFilters() {
  store.dispatch(resetFilters())
}
/*



*/
export function addBlogTag(tagName: string) {}
/*



*/
export function removeBlogTag(tagName: string) {}
/*



*/
