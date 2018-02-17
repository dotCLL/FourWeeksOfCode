import React, { Component } from 'react';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div>
          <h1>{this.props.t1}</h1>
          <h2>{this.props.t2}</h2>
        </div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
