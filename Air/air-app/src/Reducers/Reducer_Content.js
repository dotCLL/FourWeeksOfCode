import { CONTENT } from '../Actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case CONTENT:
      console.log(action.payload);
      return action.payload;
    default:

  }
  return state;
}
