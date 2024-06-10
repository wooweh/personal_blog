import { store } from "../../app/store"
import { CheckInProps, Emotions, setCheckIn } from "./homeSlice"
import { setCheckInOnDB } from "./homeSliceRemote"
/*



*/
export function submitCheckIn(emotions: Emotions[], cause: string) {
  const checkIn: CheckInProps = {
    date: Date.now().toString(),
    emotions,
    cause,
  }
  setCheckInOnDB(checkIn)
    .then(() => store.dispatch(setCheckIn(checkIn)))
    .catch(error => {
      console.log(error)
      // TODO: handle error
    })
}
/*



*/
