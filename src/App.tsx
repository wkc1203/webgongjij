import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from './layout/basic'
export const App = () => {
  return (
    <Router >
      <Switch>
        <Route path = '/' component = { Layout } />
      </Switch>
    </Router>
  );
}