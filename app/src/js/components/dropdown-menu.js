'use strict';
// main-page.js
// created by Jesse Jurman

import React, { Component } from 'react';
import {
  login,
  logout
} from '../actions/auth';
import {
  AppBar,
  IconMenu,
  IconButton,
  MenuItem,
  Dialog,
  FlatButton
} from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.signedIn
  };
}
// The main page for the application
export class MainDropdownMenu extends Component {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      p: false
    }
  }

  componentDidMount () {

  }

  loginUser () {
    this.setState({ p: false });
    this.props.dispatch(login());
  }

  render() {

    let menu = [];

    if (this.props.loggedIn) {
      menu.push(<MenuItem key='createrequest' primaryText="Create Request" />);
      menu.push(<MenuItem key='addproject' primaryText="New Project" />);
      menu.push(<MenuItem key='login' primaryText="Log Out" onClick={() => this.props.dispatch(logout()) } />);
    } else {
      menu.push(<MenuItem key='login' primaryText="Log In" onClick={ () => this.setState({ p: true }) } />);
    }

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={ () => this.loginUser() }
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={ () => this.loginUser() }
      />,
    ];

    return (
      <div>
        <IconMenu iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          {menu}
        </IconMenu>
        <Dialog
          title="Who are you?"
          actions={actions}
          modal={true}
          contentStyle={{
            width: '100%',
            maxWidth: 'none',
          }}
          open={this.state.p}
        >
          Type in your username, and you get to be that person :)
        </Dialog>
      </div>
      )
  }
}

export default connect(mapStateToProps)(MainDropdownMenu);
