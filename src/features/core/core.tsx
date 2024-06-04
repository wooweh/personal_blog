import { useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { Bar } from "./bar"
import styles from "./core.module.css"
import { selectTheme } from "./coreSliceSelectors"
import { DBListeners } from "./dbListeners"
/*



*/
export function Core() {
  const theme = useAppSelector(selectTheme)

  useLayoutEffect(() => {
    console.log(theme)
    if (!!theme) {
      const root = document.getElementsByTagName("html")[0]
      root.classList.value = ""
      root.classList.add(theme)
    }
  }, [theme])

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
