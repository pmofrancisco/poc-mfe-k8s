import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const AuthLazy = lazy(() => import('./micro-apps/AuthApp'));
const DashboardLazy = lazy(() => import('./micro-apps/DashboardApp'));
const browserHistory = createBrowserHistory();

export default () => (
  <Router history={browserHistory}>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/auth" component={AuthLazy} />
      <Route path="/" component={DashboardLazy} />
    </Switch>
    </Suspense>
  </Router>
);
