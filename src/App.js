import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import './styles.css';

import Routes from './routes/index';
import history from './services/history';

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyles />
  </Router>
);

export default App;
