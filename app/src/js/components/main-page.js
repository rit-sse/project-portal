// main-page.js
// created by Jesse Jurman

import React, { Component } from 'react';

import {
  AppBar,
  IconMenu,
  IconButton,
  MenuItem
} from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import mockRequests from './mock-requests';

import { Link } from 'react-router';
import RequestList from './request-list';

// The main page for the application
export class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: mockRequests
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
    const iconMenu = (<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Log In" />
      <MenuItem primaryText="Create Request" />
    </IconMenu> );
    return (<div>
      <AppBar title="Project Portal"
              iconElementLeft={<span/>}
              iconElementRight={iconMenu} />
      <RequestList requests={this.state.requests} />
    </div>);
  }
}

export default MainPage;
