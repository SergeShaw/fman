import { handleActions, Action } from 'redux-actions';
import { IDialog, File } from '../model';
import { OPEN_DIALOG, CLOSE_DIALOG, OPEN_DIALOG_EDIT } from '../actionTypes';

const initState: IDialog = {
  open: false,
  path: '',
};

export const dialog = handleActions<IDialog, string|File>(
  {
    [OPEN_DIALOG]: (state: IDialog, action: Action<string>): IDialog => {
      if (!action.payload) {
        return state;
      }

      return {
        path: action.payload,
        open: true,
      };
    },
    [OPEN_DIALOG_EDIT]: (state: IDialog, action: Action<File>): IDialog => {
      if (!action.payload) {
        return state;
      }

      return {
        file: action.payload,
        path: action.payload.path,
        open: true,
      };
    },
    [CLOSE_DIALOG]: (state: IDialog, action: Action<string>): IDialog => {
      return {
        path: '',
        open: false,
      };
    }
  },
  initState,
);
