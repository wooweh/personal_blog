import { store } from "../../app/store"
// import { resetAdmin, setAdmin } from "../admin/adminSlice"
// import { BlogProps, resetBlog, setBlog } from "../blog/blogSlice"
// import { getBlogFromDB } from "../blog/blogSliceRemote"
import { setShowMenu, setSystemStatus } from "./coreSlice"

/*



*/
// export function initSystemBoot() {
//   store.dispatch(setSystemStatus("booting"))

//   getBlogFromDB()
//     .then((blog: BlogProps) => {
//       store.dispatch(setBlog(blog))
//     })
//     .then(() => {
//       store.dispatch(setSystemStatus("booted"))
//     })
//     .catch((error: any) => {
//       // TODO: handle error
//       store.dispatch(setSystemStatus("notBooted"))
//     })
// }
/*
  
  
  
*/
// export function resetSystem() {
//   store.dispatch(setSystemStatus("notBooted"))
//   store.dispatch(resetBlog())
//   store.dispatch(resetAdmin())
//   // TODO: store.dispatch(setPosts({}))
// }
/*
  
  
  
*/
export function openMenu() {
  store.dispatch(setShowMenu(true))
}
/*
  
  
  
*/
export function closeMenu() {
  store.dispatch(setShowMenu(false))
}
/*
  
  
  
*/
