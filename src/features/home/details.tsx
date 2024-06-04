import styles from "./home.module.css"
/*



*/
export function Details() {
  return (
    <div className={styles["details"]}>
      <div className={styles["details-header"]}>
        <h1>BlogName</h1>
      </div>
      <div className={styles["details-body"]}>
        <p>
          This blog is about my feelings and tracking emotions over time with
          topics that i write about and what occupies my mind day to day.
        </p>
      </div>
    </div>
  )
}
/*



*/
