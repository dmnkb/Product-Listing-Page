import React from 'react';
import { AppProvider } from '../state/Context'

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from '../theme/theme'
import ListPage from './listPage/ListPage'

function App() {

  return (
    <AppProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ListPage />
        </ThemeProvider>
      </MuiThemeProvider>
    </AppProvider>
  );
}

export default App;
