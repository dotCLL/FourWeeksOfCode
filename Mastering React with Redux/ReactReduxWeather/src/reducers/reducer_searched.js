import { SEARCHED } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCHED:
      return [ action.payload ];
    default:

  }
  return state;
}
