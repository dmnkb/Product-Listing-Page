import { createMuiTheme } from '@material-ui/core/styles';

import "./styles.scss"

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: ['Work Sans', 'sans-serif'].join(","),
      color: '#26262C'
    },
    h1: {
      // fontSize: "48px",
      // fontWeight: 200,
      // letterSpacing: "calc(calc(0.01 * 1em) * -7)",
      // lineHeight: 1.1
    },
    h2: {
      // fontSize: "48px",
      // fontWeight: 200,
      // letterSpacing: "calc(calc(0.01 * 1em) * -7)",
      // lineHeight: 1.1
    },
    h3: {
       fontSize: "18px",
       fontWeight: 400,
       letterSpacing: "calc(calc(0.01 * 1em) * -4)",
       lineHeight: 1.3
    },
    h4: {
      // fontSize: "20px",
      // fontWeight: 500,
      // letterSpacing: "calc(calc(0.01 * 1em) * -5)",
      // lineHeight: 1.1
    },
    body1: {
      // fontFamily: ['Alegreya', 'serif'].join(","),
      // fontSize: "38px",
      // fontWeight: 400,
      // letterSpacing: "calc(calc(0.01 * 1em) * -2)",
      // lineHeight: 1.5
    },
    body2: {
      // fontSize: "18px",
      // fontWeight: 400,
      // letterSpacing: "0em",
      // lineHeight: 1.65
    },
    subtitle2: {
      // fontSize: "18px",
      // fontWeight: 500,
      // letterSpacing: "calc(calc(0.01 * 1em) * -6)",
      // lineHeight: 1.0
    }
  },
  palette: {
    background: {
      default: "#fff"
    },
    primary: {
       main: '#F9D7C0',
       dark: '#3D3D48',
       light: '#fff'
    },
    // secondary: {
    //    main: '#F1D0CA',
    // },
    text: {
      primary: '#26262C',
      secondary: '#757575'
    }
  },
});

export default theme;