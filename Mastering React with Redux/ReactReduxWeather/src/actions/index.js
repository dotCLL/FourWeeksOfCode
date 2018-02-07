import axios from 'axios';

const API_KEY = '8c704afdcafbc16421397ee5cae20b7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);

  // Action.
  // Payload: optional poroperty that goes along with actions that can contain
  // some additional data that can describes this particular action.
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
