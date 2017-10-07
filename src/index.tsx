import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import FMan from './fm/components/FMan.container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { store, history } from './core';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={FMan} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
