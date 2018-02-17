import React, { Component } from 'react';
import { connect } from 'react-redux';

import ground from '../Resources/ground.svg';
import plane from '../Resources/plane.svg';
import runway from '../Resources/runway.svg';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runwayHeight: null
    }

    this.translateStyle = this.translateStyle.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const runwayHeight = this.runwayElement.clientHeight;
      this.setState({ runwayHeight });
    }, 1)
  };

  translateStyle(element) {
    switch (this.props.activeCont) {
      case 'flights':
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight - (window.innerHeight / 5)}px`;
      case 'hotels':
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight - (window.innerHeight / 2.5)}px`;
      case 'chat':
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight - (window.innerHeight / 1.75)}px`;
      default:
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight  + 50}px`;
    }
  };

  render() {
    return (
      <div id="scene" style={{background: `url(${ground})`}}>
        <img
          id="runway"
          alt="Runway"
          src={runway}
          ref={ (runwayElement) => this.runwayElement = runwayElement }
          style={{
            transform: `translateY(${this.translateStyle('runway')})`
          }}
        />
        <img
          id="plane"
          alt="Commerical plane taking off"
          src={plane}
          style={{
            transform: `translateY(${this.translateStyle('plane')})`
          }}
        />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeCont: state.activeCont
  };
}

export default connect(mapStateToProps)(Scene);
