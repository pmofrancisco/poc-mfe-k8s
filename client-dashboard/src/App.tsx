import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { History, MemoryHistory } from 'history';

type AppProps = {
  history: History | MemoryHistory;
};

export default ({ history }: AppProps) => (
  <Router history={history}>
    <Switch>
      <Route path="/">
        <h1>Dashboard</h1>
      </Route>
    </Switch>
  </Router>
);
