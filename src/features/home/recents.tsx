import { BlogButton } from "./details"
import styles from "./home.module.css"
import RecentsIcon from "@mui/icons-material/AccessTimeRounded"
/*



*/
export function Recents() {
  return (
    <div className={styles["recents"]}>
      <div className={styles["recents-header"]}>
        <RecentsIcon fontSize="large" />
        <h3>Recents</h3>
      </div>
      <div className={styles["recents-body"]}>
        {/* <RecentsItem title="Being Me" onClick={() => {}} />
        <RecentsItem title="Day in the sun" onClick={() => {}} />
        <RecentsItem title="Joy" onClick={() => {}} /> */}
        <RecentsPlaceholder />
      </div>
    </div>
  )
}
/*



*/
type RecentsItemProps = {
  title: string
  onClick: () => void
}
function RecentsItem(props: RecentsItemProps) {
  return (
    <button className={styles["recents-item-button"]} onClick={props.onClick}>
      {props.title}
    </button>
  )
}
/*



*/
function RecentsPlaceholder() {
  return <div className={styles["recents-placeholder"]}>No recents</div>
}
/*



*/
