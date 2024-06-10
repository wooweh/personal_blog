import styles from "./home.module.css"
import DayIcon from "@mui/icons-material/LightModeRounded"
import BlogIcon from "@mui/icons-material/ArticleRounded"
import CheckInIcon from "@mui/icons-material/EmojiPeopleRounded"
import ArrowRightIcon from "@mui/icons-material/ArrowRightAltRounded"
import { getDaysDiff, getLongDate } from "../../common/date"
import { useNavigate } from "react-router-dom"
/*



*/
export function Details() {
  const navigate = useNavigate()
  // TODO: Selector for latest check in date
  // TODO: Selector for latest post date
  const date = new Date("June 1, 2024 00:00:00 UTC")
  const lastCheckInDate = date.getTime()
  const lasPostDate = date.getTime()
  const currentDate = Date.now()
  const checkInDaysDiff = getDaysDiff(lastCheckInDate, currentDate)
  const PostDaysDiff = getDaysDiff(lasPostDate, currentDate)

  const checkInLabel = !!lastCheckInDate
    ? `Checked in ${checkInDaysDiff} days ago`
    : "No check ins yet"

  const postLabel = !!lasPostDate
    ? `Posted ${PostDaysDiff} days ago`
    : "No posts yet"

  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <h1>BlogName</h1>
      </div>
      <div className={styles.detailsBody}>
        <Detail icon={<DayIcon fontSize="medium" />} label={getLongDate()} />
        <Detail icon={<CheckInIcon fontSize="medium" />} label={checkInLabel} />
        <Detail icon={<BlogIcon fontSize="medium" />} label={postLabel} />
        <BlogButton />
      </div>
    </div>
  )
}
/*



*/
type DetailProps = {
  icon: React.ReactElement
  label: string
}
function Detail(props: DetailProps) {
  return (
    <div className={styles.detail}>
      {props.icon}
      <h4>{props.label}</h4>
    </div>
  )
}
/*



*/
export function BlogButton() {
  const navigate = useNavigate()
  return (
    <button className={styles.blogButton} onClick={() => navigate("/blog")}>
      Go to blog <ArrowRightIcon fontSize="large" />
    </button>
  )
}
/*



*/
