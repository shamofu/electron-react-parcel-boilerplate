import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  App: {
    textAlign: 'center',
    marginTop: 100
  }
};

class ExampleApp extends React.Component {
  render() {
    return (
      <div style={ styles.App }>
        <h1>Electron + React + Parcel</h1>
        <h3><Link to='/'>Back</Link></h3>
      </div>
    );
  }
}

export default ExampleApp;