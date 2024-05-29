import { Outlet } from "react-router-dom"
import styles from "./core.module.css"
import { Bar } from "./bar"
import { DBListeners } from "./dbListeners"
import { Menu } from "./menu"
/*



*/
export function Core() {
  return (
    <div id={"core"} className={styles.core}>
      <Bar />
      <Menu />
      <Outlet />
      <DBListeners />
    </div>
  )
}
/*



*/
