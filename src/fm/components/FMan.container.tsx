import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { RouterAction } from 'react-router-redux';

import { IStore } from '../../core';
import * as actions from '../actions';

import FMan from './FMan';

const mapStateToProps = (state: IStore) => ({
  uri: state.router.location,
  isDialogOpen: state.fm.dialog.open,
  currentFile: state.fm.dialog.file,
  currentFiles: state.fm.byPath[state.router.location ? state.router.location.pathname : '/']
});

const mapDispatchToProps = (dispatch: Dispatch<RouterAction>) => (
  bindActionCreators({...actions}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FMan);
