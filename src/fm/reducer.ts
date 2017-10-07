import { combineReducers } from 'redux';
import { byPath } from './reducers/byPath';
import { dialog } from './reducers/dialog';

export default combineReducers({
  byPath,
  dialog,
});
