import React, { Component } from 'react';

import ground from '../Resources/ground.svg';
import plane from '../Resources/plane.svg';
import runway from '../Resources/runway.svg';

export default class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCont: null,
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
    switch (this.state.activeCont) {
      case null:
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight + 50}px`;
      case 'FLIGHTS':
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight - (window.innerHeight / 5)}px`;
      case 'HOTELS':
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight - (window.innerHeight / 2.5)}px`;
      default:
        return (element === 'runway') ? '0px' : `-${this.state.runwayHeight}px`;
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
