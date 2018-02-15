import React, { Component } from 'react';

import AirLogo from './AirLogo';
import NavBar from '../Containers/NavBar';

export default class NavBarHolder extends Component {
  render() {
    return (
      <div id="NavBarHolder">
        <AirLogo />
        <NavBar />
      </div>
    )
  }
}
