import React, { Component } from 'react';

// ref allows to get a reference to an html element that has
// been rendered to the page.
// this.refs.map => direct reference to this html element.

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render () {
    return <div ref="map" />;
  }
}

export default GoogleMap;
