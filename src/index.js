import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const BREAK_POINTS = {
  phone: 600 / 16,
  tablet: 950 / 16,
  laptop: 1300 / 16
}

const globalTheme = {
  breakpoints: BREAK_POINTS
}

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={globalTheme}>
    <App />
  </ThemeProvider>

  <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
