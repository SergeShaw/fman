import * as React from 'react';
import { Action } from 'redux-actions';
import { RouterAction } from 'react-router-redux';
import { Location } from 'history';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import { File, CreateFileData } from '../model';
import FManContent from './FManContent';
import FManControls from './FManControls';
import FManUri from './FManUri';
import FManDialog from './FManDialog';

interface FManProps {
  currentFiles: [File];
  isDialogOpen: boolean;
  currentFile: File;
  uri: Location;
  // actions: {
  // };
  goUp: (path: string) => RouterAction;
  createFile: (data: CreateFileData, path: string) => Action<File>;
  openDialog: (path: string) => Action<string>;
  goBack: () => RouterAction;
  goToFolder: (path: string) => RouterAction;
  closeDialog: () => Action<void>;
  openDialogEdit: (file: File) => Action<File>;
  editFile: (file: File) => Action<File>;
}

const FMan: React.SFC<FManProps> = (props) => {
  return (
    <div className="container">
      <Paper
        style={{
          position: 'relative',
          padding: 20,
          minHeight: 500,
        }}
      >
        <FManControls
          goUp={() => props.goUp(props.uri.pathname)}
          goBack={props.goBack}
          uri={props.uri}
        />
        <FManUri
          uri={props.uri.pathname}
          goToFolder={props.goToFolder}
        />
        <FManContent
          files={props.currentFiles}
          goToFolder={(path: string) => props.goToFolder(`${props.uri.pathname}/${path}`)}
          openDialogEdit={props.openDialogEdit}
        />
        <FManDialog
          file={props.currentFile}
          open={props.isDialogOpen}
          handleRequestClose={props.closeDialog}
          handleRequestCreate={(data) => props.createFile(data, props.uri.pathname)}
          handleRequestEdit={props.editFile}
        />
        <Button
          fab={true}
          color="primary"
          aria-label="add"
          onClick={() => props.openDialog(props.uri.pathname)}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
        >
          <AddIcon />
        </Button>
      </Paper>
    </div>
  );
};

export default FMan;
