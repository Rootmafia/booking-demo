import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainSearchPage from '../pages/MainSearchPage';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" component={MainSearchPage} />
    </Router>
  );
}
