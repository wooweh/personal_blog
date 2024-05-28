import { Outlet } from "react-router-dom"
import styles from "./core.module.css"
import { Bar } from "./bar"
import { DBListeners } from "./dbListeners"
/*



*/
export function Core() {
  return (
    <div id={"core"} className={styles.core}>
      <Bar />
      <Outlet />
      <DBListeners />
    </div>
  )
}
/*



*/
