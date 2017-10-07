import * as React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import { File, CreateFileData } from '../model';

interface FManDialogProps {
  open: boolean;
  file?: File;
  handleRequestClose: () => void;
  handleRequestCreate: (data: CreateFileData) => void;
  handleRequestEdit: (file: File) => void;
}

export default class FManDialog extends React.Component<FManDialogProps, {}> {

  private _titleInput: HTMLInputElement;
  private _bodyInput: HTMLInputElement;

  handleEditOrCreate = () => {
    const {
      file,
      handleRequestEdit,
      handleRequestCreate,
      handleRequestClose,
    } = this.props;

    if (file) {
      handleRequestEdit({
        ...file,
        title: this._titleInput.value,
        body: this._bodyInput.value,
      });
    } else {
      handleRequestCreate({
        title: this._titleInput.value,
        body: this._bodyInput.value,
      });
    }

    handleRequestClose();
  }

  render() {
    const { file, open, handleRequestClose } = this.props;

    return (
      <Dialog
        open={open}
        onRequestClose={handleRequestClose}
      >
        <DialogTitle>{file ? 'Edit file' : 'Create file'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth={true}
            id="title"
            name="title"
            label="File title"
            margin="dense"
            defaultValue={file ? file.title : ''}
            inputRef={(input) => this._titleInput = input}
          />
          <TextField
            fullWidth={true}
            multiline={true}
            id="body"
            name="body"
            label="File content:"
            margin="dense"
            defaultValue={file ? file.body : ''}
            inputRef={(input) => this._bodyInput = input}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={this.handleEditOrCreate}
            color="primary"
          >
            {file ? 'Edit' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
