import { ReactSearchAutocomplete } from "react-search-autocomplete"
import styles from "./blog.module.css"
/*



*/
export type SearchItemProps = {
  id: number
  name: string
}
export function SearchBar() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
  ]

  function handleSelect(item: SearchItemProps) {
    console.log(item)
  }

  function formatResult(item: SearchItemProps) {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    )
  }

  return (
    <div className={styles.searchContainer}>
      <ReactSearchAutocomplete
        items={items}
        formatResult={formatResult}
        placeholder="Search"
        styling={{
          border: `2px solid var(--bg-secondary)`,
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text-primary)",
          iconColor: "var(--text-secondary)",
          lineColor: "var(--bg-tertiary)",
          placeholderColor: "var(--text-tertiary)",
        }}
      />
    </div>
  )
}
/*



*/
