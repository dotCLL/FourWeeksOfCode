import React, { Component } from 'react';

import NavBarItem from '../Components/NavBarItem';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul id="NavBar">
        <NavBarItem title="flights" isActive={false} />
        <NavBarItem title="hotels" isActive={false} />
        <NavBarItem title="chat" isActive={false} />
      </ul>
    )
  }
}
