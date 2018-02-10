import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, searchSubmit } from '../actions/index';
import styled from 'styled-components';

const sbStyle = {
  position: 'fixed !important',
  transform: `translateY(${window.innerHeight / 2}px)`,
  width: '75%',
  transition: 'transform 1s ease-in',
  transitionDelay: '0.2s'
};



// A controlled field is a form element where the value of the input is dictated by the state
// of the component and not the other way around.

// Using connect means that we don't export default the class any more.
// The only place components are supposed to get their information from is their props.
// Hence why the container uses its mapXToProps functions with redux so that the component
// can just worry about rendering and how to handle events.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searched: false
    };

    // Take the existing function, bind said function to 'this' and then replace the
    // existing function with the now bound to 'this' version of that same function.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
      searched: true
    }, () => {
      this.props.searchSubmit(this.state.searched);
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className={this.state.searched ? 'searched input-group' : 'input-group'} style={sbStyle}>
        <input
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Causes the action creator, whenever it gets called and retuns an action to call bindActionCreators.
// Which when matched with dispatch makes sure that that action flows down into the middleware and
// then to the reducers within our redux application.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, searchSubmit }, dispatch);
}

// Connect takes two arguments. mapStateToProps and mapDispatchToProps.
// We don't want to mapStateToProps so we have to set null as the first input parameter
// to make sure that mapDispatchToProps is passed as the second argument.
export default connect(null, mapDispatchToProps)(SearchBar);
