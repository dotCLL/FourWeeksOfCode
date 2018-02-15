import React, { Component } from 'react';

import ProgressBar from '../Containers/ProgressBar';

export default class Progress extends Component {
  render() {
    return (
      <div id="Progress">
        <h2>It's all possible with Air.</h2>
        <ProgressBar />
      </div>
    )
  }
}
