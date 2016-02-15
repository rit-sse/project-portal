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

import { Link } from 'react-router';

// The main page for the application
export class MainDropdownMenu extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount () {

  }

  render() {
    return <IconMenu iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Log In" />
        <MenuItem primaryText="Create Request" />
    </IconMenu>
  }
}

export default MainDropdownMenu;
