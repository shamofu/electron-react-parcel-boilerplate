import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Router from './router';

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'), // eslint-disable-line  no-undef
  );
};

render(Router);
