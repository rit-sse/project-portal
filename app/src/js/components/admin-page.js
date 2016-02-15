// main-page.js
// created by Michael Timbrook

import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  AppBar,
  Toolbar,
  ToolbarGroup,
  RaisedButton
} from 'material-ui';

// The main page for the application
export class AdminPage extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount () {

  }

  onLinkClick() {
    console.log("Clicked")
  }

  render() {
    return <div>
      <AppBar title="Project Portal - Admin"
              iconElementLeft={<span/>}
              iconElementRight={
                <Toolbar>
                  <ToolbarGroup float="right">
                    <RaisedButton
                      containerElement={<Link to="/" />}
                      linkButton={true}
                      label="Home"/>
                  </ToolbarGroup>
                </Toolbar>
              }/>
    </div>
  }
}

export default AdminPage;
