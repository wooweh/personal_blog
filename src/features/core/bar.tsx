import HomeIcon from "@mui/icons-material/HomeRounded"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./core.module.css"
import { Menu } from "./menu"
/*



*/
export function Bar() {
  const navigate = useNavigate()
  const location = useLocation()

  function handleHomeClick() {
    navigate("/")
  }

  return (
    <nav className={styles.bar}>
      <button className={styles["home-button"]} onClick={handleHomeClick}>
        <HomeIcon />
      </button>
      <Menu />
    </nav>
  )
}
/*



*/
