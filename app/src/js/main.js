// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page.js';
import AdminPage from './components/admin-page.js';
import CreateRequest from './components/create-request-page.js';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/new" component={CreateRequest} />
    </Router>
  </Provider>
), document.getElementById("main"));
