import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme/theme'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <div className="grid">
          <div className="inner">
            <div className="s-12 m-6 l-3 col">
              Hello World
            </div>
          </div>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
