import { useState } from "react"
import styles from "./admin.module.css"
/*



*/
export function Authentication() {
  return (
    <div id={"authentication"} className={styles["auth-container"]}>
      <InputPanel />
    </div>
  )
}
/*



*/
function InputPanel() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmailChange(event: any) {
    const newEmail: string = event.target.value
    setEmail(newEmail.toLowerCase())
  }

  function handlePasswordChange(event: any) {
    setPassword(event.target.value)
  }

  return (
    <form className={styles["auth-input-panel"]}>
      <h1>Admin Login</h1>
      <Input value={email} onChange={handleEmailChange} />
      <Input value={password} onChange={handlePasswordChange} isPassword />
      <LoginButton />
    </form>
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
function LoginButton() {
  return <button className={styles["login-button"]}>Login</button>
}
/*



*/
