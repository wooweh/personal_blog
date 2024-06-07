import { store } from "../../app/store"
import { setBlogName } from "./blogSlice"
import { setBlogNameOnDB } from "./blogSliceRemote"
/*



*/
export function updateBlogName(name: string) {
  setBlogNameOnDB(name)
    .then(() => store.dispatch(setBlogName(name)))
    .catch(error => {
      // TODO: handle error
    })
}
/*



*/
