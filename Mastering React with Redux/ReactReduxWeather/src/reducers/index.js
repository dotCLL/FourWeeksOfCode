import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import SearchReducer from './reducer_searched';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  searched: SearchReducer
});

export default rootReducer;
