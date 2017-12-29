import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Root from './pages/root';
import Start from './pages/start';

const App = () => (
  <HashRouter hashType='slash'>
    <Switch>
      <Route exact path='/' component={ Root } />
      <Route exact path='/start' component={ Start } />
      <Route component={ () => <h1>204 No Content</h1> } />;
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('parcel-root'));