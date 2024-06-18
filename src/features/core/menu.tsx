import BlogIcon from "@mui/icons-material/ArticleRounded"
import DashboardIcon from "@mui/icons-material/DashboardRounded"
import LightModeIcon from "@mui/icons-material/LightModeRounded"
import LogoutIcon from "@mui/icons-material/LogoutRounded"
import MenuIcon from "@mui/icons-material/MenuRounded"
import DarkModeIcon from "@mui/icons-material/ModeNightRounded"
import CalmModeIcon from "@mui/icons-material/PanoramaFishEyeRounded"
import ProfileIcon from "@mui/icons-material/PersonRounded"
import MuiMenu from "@mui/material/Menu"
import MuiMenuItem from "@mui/material/MenuItem"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { signUserOut } from "../user/userSliceUtils"
import styles from "./core.module.css"
import { Themes } from "./coreSlice"
import { selectTheme } from "./coreSliceSelectors"
import { updateTheme } from "./coreSliceUtils"
/*



*/
export function Menu() {
  const theme = useAppSelector(selectTheme)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <button
        id="menuButton"
        className={styles.menuButton}
        onClick={handleClick}
      >
        <MenuIcon />
      </button>
      <MuiMenu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiMenu-paper": {
            padding: "var(--module-3)",
            background: "var(--bg-secondary)",
            color: "var(--text-secondary)",
            borderRadius: "var(--module-3)",
          },
        }}
      >
        <ThemeButton theme={theme} />
        <div className={styles.menuDivider}></div>
        <MenuItems onClick={handleClose} />
      </MuiMenu>
    </div>
  )
}
/*



*/
type ThemeButtonProps = {
  theme: string
}
function ThemeButton(props: ThemeButtonProps) {
  const [view, setView] = useState(props.theme)

  function handleChange(event: any, nextView: any) {
    setView(nextView)
  }

  function handleClick(e: any, view: Themes) {
    updateTheme(view)
  }

  return (
    <div className={styles.themeControlContainer}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{
          "& .Mui-selected": {
            background: "var(--bg-primary) !important",
          },
          "& .MuiToggleButtonGroup-grouped": {
            border: "none",
          },
        }}
      >
        <ToggleButton
          onClick={handleClick}
          disableRipple
          disableTouchRipple
          value="dark"
          aria-label="dark"
        >
          <DarkModeIcon />
        </ToggleButton>
        <ToggleButton
          onClick={handleClick}
          disableRipple
          disableTouchRipple
          value="light"
          aria-label="light"
        >
          <LightModeIcon />
        </ToggleButton>
        <ToggleButton
          onClick={handleClick}
          disableRipple
          disableTouchRipple
          value="calm"
          aria-label="calm"
        >
          <CalmModeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
/*



*/
type MenuItemsProps = {
  onClick: () => void
}
function MenuItems(props: MenuItemsProps) {
  const navigate = useNavigate()

  function handleBlogClick() {
    props.onClick()
    navigate("/blog")
  }

  function handleDashboardClick() {
    props.onClick()
    navigate("/dashboard")
  }

  function handleLogoutClick() {
    props.onClick()
    signUserOut()
  }

  const items: MenuItemProps[] = [
    {
      icon: <BlogIcon />,
      label: "Blog",
      onClick: handleBlogClick,
    },
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      onClick: handleDashboardClick,
    },
    {
      icon: <LogoutIcon />,
      label: "Logout",
      onClick: handleLogoutClick,
    },
  ]
  return (
    <>
      {items.map(item => (
        <MenuItem key={item.label} {...item} />
      ))}
    </>
  )
}
/*



*/
type MenuItemProps = {
  icon: React.ReactElement
  onClick: () => void
  label: string
}
export function MenuItem(props: MenuItemProps) {
  return (
    <MuiMenuItem
      disableRipple
      disableTouchRipple
      onClick={props.onClick}
      sx={{ gap: "var(--module-4)", padding: "var(--module-3)" }}
    >
      {props.icon}
      {props.label}
    </MuiMenuItem>
  )
}
/*



*/
