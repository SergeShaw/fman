export type File = {
  id: string;
  title: string;
  body?: string;
  folder: boolean;
  path: string;
};

export type IByPath = {
  [key: string]: File[],
};

export type IDialog = {
  open: boolean,
  path: string,
  file?: File,
};

export type IFmState = {
  byPath: IByPath,
  dialog: IDialog,
};

export type CreateFileData = {
  title: string,
  body: string,
};
