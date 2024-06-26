import { useState } from "react"
import styles from "./user.module.css"
import { signUserIn } from "./userSliceUtils"
import MoonLoader from "react-spinners/MoonLoader"
import { useAppSelector } from "../../app/hooks"
import { selectIsSignedIn, selectIsSigningIn } from "./userSliceSelectors"
import { useNavigate } from "react-router-dom"
/*



*/
export function Authentication() {
  const isSigningIn = useAppSelector(selectIsSigningIn)
  const isSignedIn = useAppSelector(selectIsSignedIn)
  const navigate = useNavigate()

  if (isSignedIn) navigate("/")

  return (
    <div id="authentication" className={styles["auth-container"]}>
      <InputPanel isHidden={isSigningIn} />
      <AuthLoader isLoading={isSigningIn} />
    </div>
  )
}
/*



*/
function InputPanel({ isHidden }: { isHidden: boolean }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmailChange(event: any) {
    const newEmail: string = event.target.value
    setEmail(newEmail.toLowerCase())
  }

  function handlePasswordChange(event: any) {
    setPassword(event.target.value)
  }

  function handleLoginClick() {
    signUserIn(email, password)
  }

  if (isHidden) {
    return null
  }

  return (
    <form className={styles["auth-input-panel"]}>
      <Input value={email} onChange={handleEmailChange} />
      <Input value={password} onChange={handlePasswordChange} isPassword />
      <LoginButton onClick={handleLoginClick} />
    </form>
  )
}
/*



*/
type AuthLoaderProps = {
  isLoading: boolean
}
function AuthLoader({ isLoading }: AuthLoaderProps) {
  return (
    <div>
      <MoonLoader
        color={"var(--bg-secondary)"}
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
/*



*/
type InputProps = {
  isPassword?: boolean
  value: string
  onChange: (event: any) => void
}
function Input(props: InputProps) {
  return (
    <input
      value={props.value}
      className={styles["auth-input"]}
      type={props.isPassword ? "password" : "email"}
      placeholder={props.isPassword ? "Password" : "Email"}
      onChange={props.onChange}
    />
  )
}
/*



*/
function LoginButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles["login-button"]} onClick={onClick}>
      Login
    </button>
  )
}
/*



*/
