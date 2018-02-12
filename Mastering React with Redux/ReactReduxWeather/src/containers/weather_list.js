// Container vs component.
// Container uses Redux state.
// Component does not.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';

const dataTable = {
  transform: `translateY(${window.innerHeight}px)`,
  transition: 'transform 1s ease-in',
  transitionDelay: '0.2s'
}

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    // ES5
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // ES6
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name} className="dataTableRow">
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} colour="orange" units="C" /></td>
        <td><Chart data={press} colour="blue" units="hPa" /></td>
        <td><Chart data={humid} colour="red" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className={(this.props.searched.length > 0) ? 'table table-hover searched-data' : 'table table-hover'} style={dataTable}>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
