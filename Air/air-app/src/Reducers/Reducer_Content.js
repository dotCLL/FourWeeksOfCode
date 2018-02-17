import { CONTENT } from '../Actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case CONTENT:
      return action.payload;
    default:

  }
  return state;
}
