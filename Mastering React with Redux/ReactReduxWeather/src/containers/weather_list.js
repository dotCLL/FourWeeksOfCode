// Container vs component.
// Container uses Redux state.
// Component does not. 
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  constructor() {
    super();

    this.mapStateToProps = this.mapStateToProps.bind(this);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}

// < ES6 version
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// >= ES6 version.
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
