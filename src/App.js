import React, { Component } from 'react';
import './App.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import Widget from './CoverdAreaCheckbox';
import Checkbox from './CheckBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget />
        <Checkbox />
      </div>
    );
  }
}

export default App;
