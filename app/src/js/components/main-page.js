// main-page.js
// created by Jesse Jurman

import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import RequestList from './request-list';

// The main page for the application
export class MainPage extends Component {
  render() {
    return <div>
      <AppBar title="Project Portal"
              iconElementLeft={<span/>}
              iconElementRight={<span/>} />
      <RequestList requests={this.props.requests} />
    </div>
  }
}

export default MainPage;
