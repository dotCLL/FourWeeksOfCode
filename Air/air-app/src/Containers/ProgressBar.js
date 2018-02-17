import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.progressStyle = this.progressStyle.bind(this);
  }

  progressStyle() {
    switch (this.props.activeCont) {
      case 'flights':
        return '50%';
      case 'hotels':
        return '75%';
      case 'chat':
        return '100%';
      default:
        return '25%';
    }
  }

  render() {
    return (
      <div id="ProgressBar" style={{width: this.progressStyle()}}></div>
    )
  }
};

function mapStateToProps(state) {
  return {
    activeCont: state.activeCont
  };
}

export default connect(mapStateToProps)(ProgressBar);
