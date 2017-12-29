import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as Router, Route } from 'react-router-dom';

import Start from './pages/start';

const context = {};
const App = () => (
  <Router context={ context }>
    <Route path='/' exact component={ Start } />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('parcel-root'));