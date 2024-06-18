import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import App from "./App"
import { persistor, store } from "./app/store"
import { ThemeProvider } from "@emotion/react"
import { muiTheme } from "./common/muiStyleOverrides"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={muiTheme}>
            <App />
          </ThemeProvider>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
