import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import "./styles.scss"

const theme = unstable_createMuiStrictModeTheme({
  typography: {
    allVariants: {
      fontFamily: ['Sora', 'Work Sans', 'sans-serif'].join(","),
      color: '#26262C'
    },
    h1: { },
    h2: { },
    h3: {
       fontSize: "18px",
       fontWeight: 400,
       letterSpacing: "calc(calc(0.01 * 1em) * -4)",
       lineHeight: 1.3
    },
    h4: { },
    body1: { },
    body2: { },
    subtitle2: { }
  },
  palette: {
    background: {
      default: "#fff"
    },
    primary: {
      main: '#346A4E',
      dark: '#3D3D48',
      light: '#fff'
    },
    secondary: {
      main: '#F9D7C0',
    },
    text: {
      primary: '#26262C',
      secondary: '#757575'
    }
  },
});

export default theme;