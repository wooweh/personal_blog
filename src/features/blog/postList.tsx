import styles from "./blog.module.css"
import { Virtuoso } from "react-virtuoso"
import ScrollToTopIcon from "@mui/icons-material/KeyboardArrowUpRounded"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
/*



*/
export function PostList() {
  const navigate = useNavigate()
  const virtuosoRef: any = useRef(null)

  function handleScrollToTop() {
    virtuosoRef.current &&
      virtuosoRef.current.scrollToIndex({
        index: 0,
        align: "start",
        behavior: "smooth",
      })
  }

  return (
    <div className={styles.postListContainer}>
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: "100%", width: "100%" }}
        totalCount={200}
        itemContent={(index: number) => {
          function handleClick() {
            // TODO: Navigate to postId
            navigate(`/blog/${index.toString()}`)
          }
          return (
            <PostSummary
              title={`Post number ${index.toString()}`}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              }
              createdDate={index.toString()}
              tags={["happy", "new start", "fun"]}
              onClick={handleClick}
            />
          )
        }}
      />
      <ScrollToTopButton onClick={handleScrollToTop} />
    </div>
  )
}
/*



*/
type PostSummaryProps = {
  title: string
  content: string
  createdDate: string
  tags: string[]
  onClick: () => void
}
function PostSummary(props: PostSummaryProps) {
  return (
    <div className={styles.postSummaryContainer} onClick={props.onClick}>
      <header className={styles.postSummaryHeader}>{props.title}</header>
      <p className={styles.postSummaryBody}>{props.content}</p>
      <div className={styles.postSummaryTagTray}>
        {props.tags.map(tag => (
          <div className={styles.postSummaryTag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
/*



*/
type ScrollToTopButtonProps = {
  onClick: () => void
}
function ScrollToTopButton(props: ScrollToTopButtonProps) {
  return (
    <button className={styles.scrollToTopButton} onClick={props.onClick}>
      <ScrollToTopIcon />
    </button>
  )
}

/*



*/
