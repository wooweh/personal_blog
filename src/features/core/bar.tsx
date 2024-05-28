import { useLocation, useNavigate } from "react-router-dom"
import styles from "./core.module.css"
import MenuIcon from "@mui/icons-material/Menu"
/*



*/
export function Bar() {
  const navigate = useNavigate()
  const location = useLocation()

  // const breadCrumbs = getBreadCrumbsFromPath(location.pathname)

  return (
    <nav className={styles.bar}>
      <div className={styles["bread-crumbs-container"]}>d</div>
      <button className={styles["menu-button"]}>
        <MenuIcon />
      </button>
    </nav>
  )
}
/*



*/
