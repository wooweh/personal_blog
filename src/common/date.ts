/*



*/
export function getLongDate() {
  const date = new Date()
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formattedDate
}
/*



*/
export function getDaysDiff(date1: number, date2: number) {
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
/*



*/
