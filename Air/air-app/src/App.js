import React, { Component } from 'react';
import './App.css';

import Holder from './Containers/Holder';
import Scene from './Containers/Scene';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Holder />
        <Scene />
      </div>
    );
  }
}

export default App;
