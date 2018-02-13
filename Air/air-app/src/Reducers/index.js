import { combineReducers } from 'redux';

import ContentReducer from './Reducer_Content';

const rootReducer = combineReducers({
  activeCont: ContentReducer
});

export default rootReducer;
