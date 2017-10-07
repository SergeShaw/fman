import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fm from '../fm';

const rootReducer = combineReducers({
  fm,
  router: routerReducer
});

export default rootReducer;
