import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeCont } from '../Actions/index';

import NavBarItem from '../Components/NavBarItem';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.setActiveContent = this.setActiveContent.bind(this);
  }

  setActiveContent(content) {
    this.props.activeCont(content);
  }

  render() {
    return (
      <ul id="NavBar">
        <NavBarItem title="flights" isActive={false} onClick={() => this.setActiveContent('flights')} />
        <NavBarItem title="hotels" isActive={false} onClick={() => this.setActiveContent('hotels')} />
        <NavBarItem title="chat" isActive={false} onClick={() => this.setActiveContent('chat')} />
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeCont }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
