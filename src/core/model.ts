import { model } from '../fm/';
import { RouterState } from 'react-router-redux';

export type IStore = {
  fm: model.IFmState,
  router: RouterState,
};
