import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Root from './pages/root';
import Start from './pages/start';

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
