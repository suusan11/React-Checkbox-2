import React, { Component } from 'react';
import './App.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import Widget from './CoverdAreaCheckbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
