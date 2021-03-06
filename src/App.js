import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import MainPage from './containers/MainPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
};

export default App;
