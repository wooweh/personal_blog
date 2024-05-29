import Switch from "@mui/material/Switch"
import { useAppSelector } from "../../app/hooks"
import styles from "./core.module.css"
import { selectShowMenu } from "./coreSliceSelectors"
import { closeMenu } from "./coreSliceUtils"
/*



*/
export function Menu() {
  const isOpen = useAppSelector(selectShowMenu)
  return (
    <>
      <MenuBackdrop isOpen={isOpen} />
      <MenuContent isOpen={isOpen} />
    </>
  )
}
/*



*/
function MenuBackdrop({ isOpen }: { isOpen: boolean }) {
  function handleClick() {
    closeMenu()
    console.log("close menu")
  }
  const menuBackdropClasses = isOpen
    ? styles["menu-backdrop-open"]
    : `${styles["menu-backdrop-open"]} ${styles["menu-backdrop-closed"]}`

  return <div onClick={handleClick} className={menuBackdropClasses} />
}
/*



*/
function MenuContent({ isOpen }: { isOpen: boolean }) {
  const items: MenuListItemProps[] = [
    {
      icon: <></>,
      label: "Darkmode",
      control: <Switch />,
      onClick: () => {},
    },
    {
      icon: <></>,
      label: "Blog",
      control: <></>,
      onClick: () => {},
    },
    {
      icon: <></>,
      label: "Profile",
      control: <></>,
      onClick: () => {},
    },
    {
      icon: <></>,
      label: "Dashboard",
      control: <></>,
      onClick: () => {},
    },
    {
      icon: <></>,
      label: "Logout",
      control: <></>,
      onClick: () => {},
    },
  ]

  const menuClasses = isOpen
    ? styles["menu-content-open"]
    : `${styles["menu-content-open"]} ${styles["menu-content-closed"]}`

  return (
    <div className={menuClasses}>
      <div className={styles["menu-list"]}>
        {items.map(item => (
          <MenuListItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  )
}
/*



*/
type MenuListItemProps = {
  icon: React.ReactElement
  label: string
  control?: React.ReactElement
  onClick: () => void
}
function MenuListItem(props: MenuListItemProps) {
  return (
    <div className={styles["menu-list-item"]}>
      <div className={styles["menu-list-item-icon-container"]}>
        {props.icon}
        {props.label}
      </div>
      <button className={styles["menu-list-item-button"]}></button>
      <div className={styles["menu-list-item-control-container"]}>
        {props.control}
      </div>
    </div>
  )
}
/*



*/
