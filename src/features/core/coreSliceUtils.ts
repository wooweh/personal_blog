import { store } from "../../app/store"
// import { BlogProps, resetBlog, setBlog } from "../blog/blogSlice"
// import { getBlogFromDB } from "../blog/blogSliceRemote"
import { Themes, setSystemStatus, setTheme } from "./coreSlice"

/*



*/
export function initSystemBoot() {
  store.dispatch(setSystemStatus("booting"))
  setTimeout(() => {
    store.dispatch(setSystemStatus("booted"))
  }, 1000)

  // getBlogFromDB()
  //   .then((blog: BlogProps) => {
  //     store.dispatch(setBlog(blog))
  //   })
  //   .then(() => {
  //     store.dispatch(setSystemStatus("booted"))
  //   })
  //   .catch((error: any) => {
  //     // TODO: handle error
  //     store.dispatch(setSystemStatus("notBooted"))
  //   })
}
/*
  
  
  
*/
export function resetSystem() {
  store.dispatch(setSystemStatus("notBooted"))
  // store.dispatch(resetBlog())
  // TODO: store.dispatch(setPosts({}))
}
/*
  
  
  
*/
export function updateTheme(theme: Themes) {
  store.dispatch(setTheme(theme))
}
/*
  
  
  
*/
