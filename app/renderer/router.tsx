import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Root from './pages/root';
import Start from './pages/start';

const history = createBrowserHistory();

export default () => {
  return (
    <HashRouter hashType='noslash'>
      <Switch>
        <Route exact path='/' component={Root} />
        <Route exact path='/start' component={Start} />
        <Route component={() => <h1>204 No Content</h1>} />
      </Switch>
    </HashRouter>
  );
};
