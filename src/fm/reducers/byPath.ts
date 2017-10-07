import { handleActions, Action } from 'redux-actions';
import { IByPath, File } from '../model';
import { CREATE_FILE, EDIT_FILE } from '../actionTypes';

const initState: IByPath = {
  '/': [
    {
      id: '0',
      title: 'TestFile.txt',
      body: 'Test content',
      path: '/',
      folder: false,
    }, {
      id: '1',
      title: 'home',
      path: '/',
      folder: true,
    }
  ],
  '/home': [
    {
      id: '2',
      title: 'test File 2',
      body: 'test content 2',
      path: '/home',
      folder: false,
    }, {
      id: '3',
      title: 'folderX',
      path: '/home',
      folder: true,
    }, {
      id: '4',
      title: 'Fil1',
      path: '/home',
      folder: false,
    }, {
      id: '5',
      title: 'FolderY',
      path: '/home',
      folder: true,
    }
  ],
  '/home/FolderY': [
    {
      id: '6',
      title: 'File 2',
      body: 'content',
      path: '/home/FolderY',
      folder: false,
    }
  ],
  '/home/folderX': [],
};

export const byPath = handleActions<IByPath, File>(
  {
    [CREATE_FILE]: (state: IByPath, action: Action<File>): IByPath => {
      if (!action.payload) {
        return state;
      }

      if (state[action.payload.path]) {
        return {
          ...state,
          [action.payload.path]: [...state[action.payload.path], action.payload],
        };
      }

      return {
        ...state,
        [action.payload.path]: [action.payload],
      };
    },
    [EDIT_FILE]: (state: IByPath, action: Action<File>): IByPath => {
      if (!action.payload) {
        return state;
      }

      const file = action.payload;
      if (state[file.path]) {
        return {
          ...state,
          [file.path]: state[file.path].map(_file =>
            (_file.id === file.id) ? file : _file
          ),
        };
      }

      return state;
    }
  },
  initState
);
