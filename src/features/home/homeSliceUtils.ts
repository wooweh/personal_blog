import { store } from "../../app/store"
import { CheckInProps, Emotions, setCheckIn } from "./homeSlice"

/*



*/
export function submitCheckIn(emotions: Emotions[], cause: string) {
  const checkIn: CheckInProps = {
    date: Date.now().toLocaleString(),
    emotions,
    cause,
  }
  store.dispatch(setCheckIn(checkIn))
}
/*



*/
