import { createTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor, secondaryColor, thirdColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
        main: secondaryColor,

    },
    third: {
        main: thirdColor,
        contrastText: "white"
        },
    text: {
        primary: neutralColor
    },
    neutral: {
      main: neutralColor,
      contrastText: "white"
    }
  }
})

export default theme