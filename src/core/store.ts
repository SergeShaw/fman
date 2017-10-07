import { Store, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducer';

export const history = createHistory();
const middleware = routerMiddleware(history);

const initialState = {};
export const store: Store<{}> = createStore(rootReducer, initialState, applyMiddleware(middleware));
