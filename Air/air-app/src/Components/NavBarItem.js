import React, { Component } from 'react';

export default class NavBarItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li className="NavBarItem" onClick={this.props.onClick} style={{ color: (this.props.isActive) ? '#4B91E6' : 'inherit' }}>{this.props.title}</li>
    )
  }
}
