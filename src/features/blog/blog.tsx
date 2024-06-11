import { useState } from "react"
import styles from "./blog.module.css"
import { SearchBar, SearchItemProps } from "./searchBar"
import FilterIcon from "@mui/icons-material/FilterAltRounded"
import { PostFilter } from "./postFilter"
/*



*/
export function Blog() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className={styles.blogContainer}>
      <BlogSearchControls />
      <PostFilter />
    </div>
  )
}
/*



*/
function BlogSearchControls() {
  const items: SearchItemProps[] = [
    {
      id: 1,
      name: "Post 1",
    },
    {
      id: 2,
      name: "Post 2",
    },
    {
      id: 3,
      name: "Post 3",
    },
  ]
  return (
    <div className={styles.blogSearchControls}>
      <SearchBar items={items} onSelect={() => {}} />
      <button className={styles.openFilterButton}>
        <FilterIcon />
      </button>
    </div>
  )
}
/*



*/
