import styles from "./blog.module.css"
import FilterIcon from "@mui/icons-material/FilterAltRounded"
import CloseIcon from "@mui/icons-material/CloseRounded"
import DateIcon from "@mui/icons-material/CalendarTodayRounded"
import TagIcon from "@mui/icons-material/LocalOfferRounded"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import _ from "lodash"
/*



*/
export function PostFilter() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContent}>
        <Header />
        <DateFilters />
        <TagFilters />
        <ClearFiltersButton />
      </div>
    </div>
  )
}
/*



*/
function Header() {
  return (
    <div className={styles.filterHeader}>
      <div className={styles.filterHeading}>
        <FilterIcon fontSize="large" />
        <header>Filter Posts</header>
      </div>
      <button className={styles.closeFilterButton}>
        <CloseIcon fontSize="large" className={styles.closeFilterIcon} />
      </button>
    </div>
  )
}
/*



*/
function DateFilters() {
  return (
    <FilterTypeSection icon={<DateIcon />} heading="date">
      <div></div>
    </FilterTypeSection>
  )
}
/*



*/
function TagFilters() {
  return (
    <FilterTypeSection icon={<TagIcon />} heading="tags">
      <div></div>
    </FilterTypeSection>
  )
}
/*



*/
type FilterTypeSectionProps = {
  icon: React.ReactElement
  heading: string
  children: React.ReactElement
}
function FilterTypeSection(props: FilterTypeSectionProps) {
  return (
    <div className={styles.filterTypeContainer}>
      <div className={styles.filterTypeHeader}>
        {props.icon}
        <header>{_.capitalize(props.heading)}</header>
      </div>
      <div className={styles.filterTypeBody}>{props.children}</div>
    </div>
  )
}
/*



*/
function ClearFiltersButton() {
  return <button className={styles.clearFiltersButton}>Clear Filters</button>
}
/*



*/
function DateRangePicker() {
  return (
    <div>
      <DatePicker />
    </div>
  )
}
/*



*/
type FilterPillProps = {
  label: string
  onClick: () => void
  isToggled: boolean
}
function FilterPill(props: FilterPillProps) {
  return (
    <button className={styles.filterPill} onClick={props.onClick}>
      {props.label}
    </button>
  )
}
/*



*/
