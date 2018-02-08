import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // React and Redux, never want to manipulate your state.
      // Instead create entirely new array that is modified.
      return [ action.payload.data, ...state ];
    default:

  }
  return state;
}
