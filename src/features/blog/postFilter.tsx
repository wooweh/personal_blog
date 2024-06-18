import styles from "./blog.module.css"
import FilterIcon from "@mui/icons-material/FilterAltRounded"
import CloseIcon from "@mui/icons-material/CloseRounded"
import DateIcon from "@mui/icons-material/CalendarTodayRounded"
import TagIcon from "@mui/icons-material/LocalOfferRounded"
import HashIcon from "@mui/icons-material/TagRounded"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import _ from "lodash"
import dayjs, { Dayjs } from "dayjs"
import { useAppSelector } from "../../app/hooks"
import {
  selectBlogTags,
  selectFilterFromDate,
  selectFilterIsNewest,
  selectFilterTags,
  selectFilterToDate,
} from "./blogSliceSelectors"
import {
  addFilterTag,
  clearFilters,
  filterByNewest,
  removeFilterTag,
  updateFilterFromDate,
  updateFilterToDate,
} from "./blogSliceUtils"
import { useEffect, useState } from "react"
/*



*/
type PostFilterProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export function PostFilter(props: PostFilterProps) {
  const postFilterStyles = `${styles.filterContainer} ${props.isOpen && styles.filterContainerOpen}`
  return (
    <div className={postFilterStyles}>
      <div className={styles.filterContent}>
        <Header setIsOpen={props.setIsOpen} />
        <DateFilters />
        <TagFilters />
        <ClearFiltersButton />
      </div>
    </div>
  )
}
/*



*/
type HeaderProps = {
  setIsOpen: (isOpen: boolean) => void
}
function Header(props: HeaderProps) {
  return (
    <div className={styles.filterHeader}>
      <div className={styles.filterHeading}>
        <FilterIcon fontSize="large" />
        <header>Filter Posts</header>
      </div>
      <button
        className={styles.closeFilterButton}
        onClick={() => props.setIsOpen(false)}
      >
        <CloseIcon fontSize="large" className={styles.closeFilterIcon} />
      </button>
    </div>
  )
}
/*



*/
function DateFilters() {
  const isNewest = useAppSelector(selectFilterIsNewest)
  const fromDate = useAppSelector(selectFilterFromDate)
  const toDate = useAppSelector(selectFilterToDate)
  const earliestDate = new Date("January 1, 2024 00:00:00 UTC").valueOf()
  const latestDate = new Date("June 1, 2024 00:00:00 UTC").valueOf()

  function handleFromDateSelect(value: any) {
    const timestamp = new Date(value).valueOf().toString()
    updateFilterFromDate(timestamp)
  }
  function handleToDateSelect(value: any) {
    const timestamp = new Date(value).valueOf().toString()
    updateFilterToDate(timestamp)
  }

  return (
    <FilterTypeSection icon={<DateIcon />} heading="date">
      <div className={styles.dateOrderFilterContainer}>
        <DateFilterButton
          label="Newest"
          onClick={() => filterByNewest(true)}
          isToggled={isNewest}
        />
        <DateFilterButton
          label="Oldest"
          onClick={() => filterByNewest(false)}
          isToggled={!isNewest}
        />
      </div>
      <DateRangePicker
        label="From"
        onDateSelect={handleFromDateSelect}
        value={!!fromDate ? fromDate : earliestDate}
      />
      <DateRangePicker
        label="To"
        onDateSelect={handleToDateSelect}
        value={!!toDate ? toDate : latestDate}
      />
    </FilterTypeSection>
  )
}
/*



*/
type DateFilterButtonProps = {
  label: string
  onClick: () => void
  isToggled: boolean
}
function DateFilterButton(props: DateFilterButtonProps) {
  const buttonStyles = `${styles.filterPillButton} ${props.isToggled && styles.filterPillButtonToggled}`

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      {props.label}
    </button>
  )
}
/*



*/
function TagFilters() {
  const blogTags = useAppSelector(selectBlogTags)
  const filterTags = useAppSelector(selectFilterTags)

  function handleTagClick(tag: string) {
    if (filterTags.includes(tag)) {
      removeFilterTag(tag)
    } else {
      addFilterTag(tag)
    }
  }

  return (
    <FilterTypeSection icon={<TagIcon />} heading="tags">
      <div className={styles.tagFilterContainer}>
        {blogTags.map(tag => (
          <TagFilterButton
            label={tag}
            onClick={() => handleTagClick(tag)}
            isToggled={filterTags.includes(tag)}
            key={tag}
          />
        ))}
      </div>
    </FilterTypeSection>
  )
}
/*



*/
type TagFilterButtonProps = {
  label: string
  onClick: () => void
  isToggled: boolean
}
function TagFilterButton(props: TagFilterButtonProps) {
  const buttonStyles = `${styles.filterPillButton} ${props.isToggled && styles.filterPillButtonToggled}`
  return (
    <button className={buttonStyles} onClick={props.onClick}>
      {props.label}
    </button>
  )
}
/*



*/
type FilterTypeSectionProps = {
  icon: React.ReactElement
  heading: string
  children: React.ReactElement | React.ReactElement[]
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
  function handleClick() {
    clearFilters()
  }

  return (
    <button className={styles.clearFiltersButton} onClick={handleClick}>
      Clear Filters
    </button>
  )
}
/*



*/
type DateRangePickerProps = {
  label: string
  value: number
  onDateSelect: (value: any) => void
}
function DateRangePicker(props: DateRangePickerProps) {
  const [value, setValue] = useState(dayjs(props.value))
  function handleChange(value: any) {
    setValue(value)
    props.onDateSelect(value)
  }

  useEffect(() => {
    setValue(dayjs(props.value))
  }, [props.value])

  return (
    <div className={styles.dateRangePickerContainer}>
      <MobileDatePicker
        label={props.label}
        closeOnSelect
        autoFocus={false}
        value={value}
        disableFuture
        slots={{
          actionBar: () => null,
        }}
        onChange={handleChange}
        sx={{
          "& .MuiPaper-root-MuiDialog-paper": {
            background: "var(--bg-tertiary)",
            borderRadius: "var(--module-2)",
          },
          "& .MuiFormLabel-root": {
            color: "var(--text-tertiary) !important",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "var(--module-2)",
            "& fieldset": {
              border: "2px solid var(--bg-tertiary) !important",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "var(--text-secondary)",
            padding: "var(--module-3) var(--module-4)",
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  )
}
/*



*/
