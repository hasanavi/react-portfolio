import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-basics-example">
          <Row className="App-intro">
            <Column small={2} large={4}>4 columns</Column>
            <Column small={4} large={4}>4 columns</Column>
            <Column small={6} large={4}>4 columns</Column>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
