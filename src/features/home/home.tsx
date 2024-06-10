import { signIn } from "../user/userAuth"
import { CheckIn } from "./checkIn"
import { Details } from "./details"
import styles from "./home.module.css"
import { Recents } from "./recents"
/*



*/
export function Home() {
  const email = import.meta.env.VITE_DEV_USER_EMAIL
  const password = import.meta.env.VITE_DEV_USER_PASSWORD
  // signIn(email, password)

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeMainPanel}>
        <div className={styles.detailsContainer}>
          <Details />
        </div>
        <div className={styles.checkInContainer}>
          <CheckIn />
        </div>
      </div>
      <div className={styles.recentsContainer}>
        <Recents />
      </div>
    </div>
  )
}
/*



*/
