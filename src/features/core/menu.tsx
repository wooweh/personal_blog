import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react"
import MenuIcon from "@mui/icons-material/MenuRounded"
import ThemeIcon from "@mui/icons-material/ContrastRounded"
import ProfileIcon from "@mui/icons-material/PersonRounded"
import BlogIcon from "@mui/icons-material/ArticleRounded"
import DashboardIcon from "@mui/icons-material/DashboardRounded"
import LogoutIcon from "@mui/icons-material/LogoutRounded"
/*



*/
export function Menu() {
  return (
    <div className="fixed top-24 w-52 text-right">
      <HeadlessMenu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <MenuIcon className="size-4 fill-white/60" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <ThemeIcon />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘E
                </kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <ProfileIcon />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <DashboardIcon />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘A
                </kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <LogoutIcon />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </HeadlessMenu>
    </div>
  )
}
