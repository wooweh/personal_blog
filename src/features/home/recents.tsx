import { PostProps } from "../posts/postsSlice"
import styles from "./home.module.css"
import RecentsIcon from "@mui/icons-material/AccessTimeRounded"
/*



*/
export function Recents() {
  // TODO: Selector for recents
  const recentPosts: PostProps[] = []
  return (
    <div className={styles.recents}>
      <div className={styles.recentsHeader}>
        <RecentsIcon fontSize="large" />
        <h3>Recents</h3>
      </div>
      <div className={styles.recentsBody}>
        {!!recentPosts.length ? (
          recentPosts.map(post => (
            <RecentsItem
              title={post.title}
              onClick={() => {
                // TODO: navigate to post id
              }}
            />
          ))
        ) : (
          <RecentsPlaceholder />
        )}
      </div>
    </div>
  )
}
/*



*/
type RecentsItemProps = {
  title: string
  onClick: () => void
}
function RecentsItem(props: RecentsItemProps) {
  return (
    <button className={styles.recentsItemButton} onClick={props.onClick}>
      {props.title}
    </button>
  )
}
/*



*/
function RecentsPlaceholder() {
  return <div className={styles.recentsPlaceholder}>No recents</div>
}
/*



*/
