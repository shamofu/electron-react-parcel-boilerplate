import React from 'react';
import { Link } from 'react-router-dom';

import './ExampleApp.css';

class ExampleApp extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Electron + React + Parcel</h1>
        <h3><Link to='/'>Back</Link></h3>
      </div>
    );
  }
}

export default ExampleApp;