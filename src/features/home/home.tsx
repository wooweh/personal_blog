import { CheckIn } from "./checkIn"
import { Details } from "./details"
import styles from "./home.module.css"
import { Recents } from "./recents"
/*



*/
export function Home() {
  return (
    <div className={styles.home-container}>
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
