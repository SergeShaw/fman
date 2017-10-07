import * as React from 'react';

import * as classNames from 'classnames';
import { withStyles, Theme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import InsertDriveFileIcon from 'material-ui-icons/InsertDriveFile';

import { File } from '../model';

const styles = (theme: Theme) => ({
  icon: {
    height: 100,
    width: 100,
    color: theme.palette.action.disabled,
  },
  active: {
    color: theme.palette.primary.A200,
  }
});

interface FManContentState {
  selected: {
    [key: string]: boolean,
  };
}

interface FManContentProps {
  files: File[];
  goToFolder: Function;
  openDialogEdit: Function;
  classes?: { [key: string]: string };
}

class FManContent extends React.Component<FManContentProps, FManContentState> {

  state = {
    selected: {},
  };

  _handleDoubleClick = (file: File) => {
    if (file.folder) {
      this.props.goToFolder(file.title);
    } else {
      this.props.openDialogEdit(file);
    }
  }

  _handleClick = (fileId: string) => {
    this.setState({
      selected: {
        ...this.state.selected,
        [fileId]: !this.state.selected[fileId],
      }
    });
  }

  render() {
    const { files, classes } = this.props;
    const { selected } = this.state;

    if (!files) {
      return (
        <Typography color="error" type="subheading" align="center">
          Директории с таким адресом не существует
        </Typography>
      );
    }

    if (files && !files.length) {
      return (
        <Typography color="secondary" type="subheading" align="center">
          Директория не содержит файлов.
        </Typography>
      );
    }

    const sortedFiles = files.sort((a, b) => +b.folder - +a.folder);

    return (
      <Grid container={true}>
        {sortedFiles.map(file =>
          <Grid
            key={file.id}
            item={true}
            xs={6}
            sm={3}
            md={2}
            onClick={() => this._handleClick(file.id)}
            onDoubleClick={() => this._handleDoubleClick(file)}
          >
            {file.folder ?
              <FolderIcon
                className={classes && classNames({
                  [classes.icon]: true,
                  [classes.active]: selected[file.id],
                })}
              />
            :
              <InsertDriveFileIcon
                className={classes && classNames({
                  [classes.icon]: true,
                  [classes.active]: selected[file.id],
                })}
              />
            }
            <Typography type="subheading" component="h2">
              {file.title}
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(FManContent);
