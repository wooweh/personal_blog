import { useState } from "react"
import styles from "./blog.module.css"
import { SearchBar, SearchItemProps } from "./searchBar"
import FilterIcon from "@mui/icons-material/FilterAltRounded"
import { PostFilter } from "./postFilter"
import { PostList } from "./postList"
import { useNavigate } from "react-router-dom"
/*



*/
export function Blog() {
  const [showFilter, setShowFilter] = useState(false)
  const searchItems: SearchItemProps[] = [
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
    <div className={styles.blogContainer}>
      <SearchControls setShowFilter={setShowFilter} items={searchItems} />
      <PostFilter isOpen={showFilter} setIsOpen={setShowFilter} />
      <PostList />
    </div>
  )
}
/*



*/
type SearchControlsProps = {
  items: SearchItemProps[]
  setShowFilter: (showFilter: boolean) => void
}
function SearchControls(props: SearchControlsProps) {
  const navigate = useNavigate()

  function handleSelect(item: SearchItemProps) {
    navigate(`/blog/${item.id}`)
  }

  return (
    <div className={styles.blogSearchControls}>
      <SearchBar items={props.items} onSelect={handleSelect} />
      <button
        className={styles.openFilterButton}
        onClick={() => props.setShowFilter(true)}
      >
        <FilterIcon />
      </button>
    </div>
  )
}
/*



*/
