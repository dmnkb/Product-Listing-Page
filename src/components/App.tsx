import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme/theme'

import ListPage from './listPage/ListPage'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ListPage />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
