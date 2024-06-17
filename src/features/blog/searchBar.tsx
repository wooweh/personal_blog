import { ReactSearchAutocomplete } from "react-search-autocomplete"
import styles from "./blog.module.css"
/*



*/
export type SearchBarProps = {
  items: SearchItemProps[]
  onSelect: (item: SearchItemProps) => void
}
export type SearchItemProps = {
  id: number
  name: string
}
export function SearchBar(props: SearchBarProps) {
  function formatResult(item: SearchItemProps) {
    return (
      <span
        style={{
          display: "block",
          textAlign: "left",
          padding: "5px",
        }}
      >
        {item.name}
      </span>
    )
  }

  return (
    <div className={styles.searchContainer}>
      <ReactSearchAutocomplete
        items={props.items}
        onSelect={props.onSelect}
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
