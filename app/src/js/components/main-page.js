// main-page.js
// created by Jesse Jurman

import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  ToolbarGroup,
  RaisedButton
} from 'material-ui';
import { Link } from 'react-router';
import RequestList from './request-list';

// The main page for the application
export class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: []
    }
  }

  componentWillMount () {
    let requestQuery = new XMLHttpRequest();
    requestQuery.open('GET', '/r/purchaselist');
    requestQuery.onload = () => {
        if (requestQuery.status === 200) {
            const requestString = requestQuery.responseText;
            let requests = JSON.parse(requestString)
            this.setState({ requests: requests });
        }
    };
    requestQuery.send();
  }

  render() {
    return <div>
      <AppBar title="Project Portal"
              iconElementLeft={<span/>}
              iconElementRight={
                <Toolbar>
                  <ToolbarGroup float="right">
                    <RaisedButton
                      containerElement={<Link to="/new" />}
                      linkButton={true}
                      label="New Request" />
                  </ToolbarGroup>
                </Toolbar>
              } />
      <RequestList requests={this.state.requests} />
    </div>
  }
}

export default MainPage;
