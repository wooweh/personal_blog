import { Theme } from "@emotion/react"
import { createTheme } from "@mui/material/styles"

export const muiTheme = (theme: any) =>
  createTheme({
    ...theme,
    components: {
      MuiPickersToolbar: {
        styleOverrides: {
          root: {
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-secondary)",
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-secondary)",
          },
        },
      },
      MuiDayCalendar: {
        styleOverrides: {
          root: {
            color: "var(--text-secondary)",
          },
          weekDayLabel: {
            color: "var(--text-secondary)",
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: "var(--text-secondary)",
            fontWeight: "bold",
            borderRadius: "5px",
            backgroundColor: "var(--bg-primary)",
          },
        },
      },
    },
  })
