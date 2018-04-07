import * as React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  App: {
    marginTop: 100,
    textAlign: 'center'
  }
}

class ExampleApp extends React.Component<any, any> {
  public render() {
    return (
      <div style={styles.App}>
        <h1>Electron + React + Parcel</h1>
        <h3><Link to='/'>Back</Link></h3>
      </div>
    )
  }
}

export default ExampleApp
