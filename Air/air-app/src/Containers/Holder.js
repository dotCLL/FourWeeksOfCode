import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBarHolder from '../Components/NavBarHolder';
import Progress from '../Components/Progress';
import ContentHolder from './ContentHolder';

class Holder extends Component {
  render() {
    return (
      <div id="holder">
        <NavBarHolder />
        <ContentHolder />
        <Progress />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Holder);
