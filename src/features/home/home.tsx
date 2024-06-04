import { CheckIn } from "./checkIn"
import { Details } from "./details"
import styles from "./home.module.css"
/*



*/
export function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-main-panel"]}>
        <div className={styles["details-container"]}>
          <Details />
        </div>
        <div className={styles["check-in-container"]}>
          <CheckIn />
        </div>
      </div>
      <div className={styles["recents-container"]}></div>
    </div>
  )
}
/*



*/
