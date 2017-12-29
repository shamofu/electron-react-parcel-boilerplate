import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Router from './router';

const App = () => (
  <HashRouter hashType='slash'>
    <Router />
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('parcel-root'));