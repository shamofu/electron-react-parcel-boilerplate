import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Start from './pages/start';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/start' component={ Start } />
      <Route component={ () => <h1>204 No Content</h1> } />;
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('parcel-root'));