// Container vs component.
// Container uses Redux state.
// Component does not.
import React, { Component } from 'react';
import { connect } from 'react-redux';

const dataTable = {
  transform: `translateY(${window.innerHeight}px)`,
  transition: 'transform 1s ease-in',
  transitionDelay: '0.2s'
}

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key="name">
        <td>{name}</td>
        <td>{cityData.list[0].main.temp} C</td>
        <td>{cityData.list[0].main.pressure} hPa</td>
        <td>{cityData.list[0].main.humidity} %</td>
      </tr>
    )
  }

  render() {
    console.log(this.props.searched.length);
    return (
      <table className={(this.props.searched.length > 0) ? 'table table-hover searched-data' : 'table table-hover'} style={dataTable}>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}



// < ES6 version
function mapStateToProps(state) {
  console.log("mapStateToProps");
  console.log(state);
  return {
    weather: state.weather,
    searched: state.searched
  };
}

// >= ES6 version.
// function mapStateToProps({ weather }) {
//   return { weather };
// }

export default connect(mapStateToProps)(WeatherList);
