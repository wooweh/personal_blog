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
import { signAdminOut } from "../admin/adminSliceUtils"
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
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <button
        id="menu-button"
        className={styles["menu-button"]}
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
            background: "var(--background-secondary)",
            color: "var(--text-secondary)",
            borderRadius: "var(--module-3)",
          },
        }}
      >
        <ThemeButton theme={theme} />
        <div className={styles["menu-divider"]}></div>
        <MenuItems />
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
    <div className={styles["theme-control-container"]}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{
          "& .Mui-selected": {
            background: "var(--background-primary) !important",
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
function MenuItems() {
  const navigate = useNavigate()

  const items: MenuItemProps[] = [
    {
      icon: <BlogIcon />,
      label: "Blog",
      onClick: () => navigate("/blog"),
    },
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
    },
    {
      icon: <LogoutIcon />,
      label: "Logout",
      onClick: signAdminOut,
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
