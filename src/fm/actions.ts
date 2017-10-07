import { createAction } from 'redux-actions';
import { push, goBack as goBackInner } from 'react-router-redux';
import { v1 } from 'uuid';
import { 
  OPEN_DIALOG,
  OPEN_DIALOG_EDIT,
  CLOSE_DIALOG,
  CREATE_FILE,
  EDIT_FILE,
} from './actionTypes';

import { File, CreateFileData } from './model';

export const openDialog = createAction(OPEN_DIALOG, (path: string) => path);
export const openDialogEdit = createAction(OPEN_DIALOG_EDIT, (file: File) => file);
export const closeDialog = createAction(CLOSE_DIALOG);

export const createFile = createAction(CREATE_FILE, (data: CreateFileData, path: string): File => ({
  ...data,
  path,
  id: v1(),
  folder: false,
}));

export const editFile = createAction(EDIT_FILE, (file: File): File => file);

export const goUp = (folder: string) => (
  push(folder.substring(0, folder.lastIndexOf('/')))
);

export const goToFolder = (folder: string) => (
  push(folder.replace('//', '/'))
);
export const goBack = () => goBackInner();
