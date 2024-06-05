import styles from "./home.module.css"
import CheckInIcon from "@mui/icons-material/EmojiPeopleRounded"
import { Emotions } from "./homeSlice"
import _ from "lodash"
import { useReducer, useState } from "react"
import { submitCheckIn } from "./homeSliceUtils"
/*



*/
type EmotionStateProps = {
  emotions: string[]
}
type EmotionActionProps = {
  type: EmotionActionsTypes
  emotion?: string
}
type EmotionDispatch = React.Dispatch<EmotionActionProps>
type EmotionActionsTypes = "add" | "remove" | "clear"
function manageEmotions(state: EmotionStateProps, action: EmotionActionProps) {
  const emotion = action.emotion

  switch (action.type) {
    case "clear":
      return { ...state, emotions: [] }
    case "add":
      if (emotion) return addEmotion(state, emotion)
    case "remove":
      if (emotion) return removeEmotion(state, emotion)
  }
}
/*



*/
function addEmotion(state: any, emotion: string) {
  const emotions = [...state.emotions]
  const index = _.indexOf(emotions, emotion)
  if (index === -1) {
    return {
      ...state,
      emotions: [emotion, ...emotions],
    }
  } else {
    return state
  }
}
/*



*/
function removeEmotion(state: any, emotion: string) {
  const emotions = [...state.emotions]
  const indexToRemove = _.indexOf(emotions, emotion)
  const newEmotions = [...emotions]
  newEmotions.splice(indexToRemove, 1)
  return {
    ...state,
    emotions: newEmotions,
  }
}
/*



*/
export function CheckIn() {
  const [state, dispatch] = useReducer(manageEmotions, {
    emotions: [],
  })
  const [cause, setCause] = useState("")
  const emotions = state.Emotions
  console.log(cause)

  function handleSubmit() {
    submitCheckIn(emotions, cause)
  }

  function handleClear() {
    dispatch({ type: "clear" })
    setCause("")
  }

  return (
    <div className={styles["check-in"]}>
      <div className={styles["check-in-header"]}>
        <CheckInIcon fontSize="large" />
        <h2>Check in</h2>
      </div>
      <div className={styles["check-in-body"]}>
        <EmotionSelection state={state} dispatch={dispatch} />
        <CauseInput cause={cause} setCause={setCause} />
      </div>
      <div className={styles["button-tray"]}>
        <button className={styles["submit-button"]} onClick={handleSubmit}>
          Submit
        </button>
        <button className={styles["clear-button"]} onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  )
}
/*



*/
type EmotionSelectionProps = {
  dispatch: EmotionDispatch
  state: EmotionStateProps
}
function EmotionSelection(props: EmotionSelectionProps) {
  const { state, dispatch } = props
  const selectedEmotions = state.emotions
  const emotions: Emotions[] = [
    "anger",
    "sadness",
    "joy",
    "calm",
    "excitement",
    "anxiety",
    "stress",
  ]

  return (
    <div className={styles["question-container"]}>
      <h5>What emotions dominated your past day of experience?</h5>
      <div className={styles["emotions-container"]}>
        {emotions.map(emotion => {
          const isSelected = _.includes(selectedEmotions, emotion)
          return (
            <EmotionPill
              key={emotion}
              emotion={emotion}
              isSelected={isSelected}
              onClick={() =>
                dispatch({ type: isSelected ? "remove" : "add", emotion })
              }
            />
          )
        })}
      </div>
    </div>
  )
}
/*



*/
type EmotionPillProps = {
  emotion: Emotions
  isSelected: boolean
  onClick: Function
}
function EmotionPill(props: EmotionPillProps) {
  const buttonStyles = `${styles["emotion-pill"]} ${props.isSelected && styles["emotion-pill-selected"]}`
  return (
    <button className={buttonStyles} onClick={() => props.onClick()}>
      {props.emotion}
    </button>
  )
}
/*



*/
type CauseInputProps = {
  cause: string
  setCause: Function
}
function CauseInput(props: CauseInputProps) {
  const { cause, setCause } = props

  return (
    <div className={styles["question-container"]}>
      <h5>What do you think caused this experience?</h5>
      <input
        value={cause}
        className={styles["cause-input"]}
        type="text"
        placeholder="Short statement or leave blank"
        onChange={(e: any) => setCause(e.target.value)}
      />
    </div>
  )
}
/*



*/
