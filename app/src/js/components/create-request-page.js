// main-page.js
// created by Michael Timbrook

import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  AppBar,
  Toolbar,
  ToolbarGroup,
  RaisedButton,
  TextField,
  Paper
} from 'material-ui';

// The main page for the application
export class CreateRequest extends Component {

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
      <AppBar title="Project Portal - New Request"
              iconElementLeft={<span/>}
              iconElementRight={
                <Toolbar>
                  <ToolbarGroup float="right">
                    <RaisedButton
                      containerElement={<Link to="/" />}
                      linkButton={true}
                      label="Cancel"/>
                  </ToolbarGroup>
                </Toolbar>
              }/>
        <Paper style={{
          top: '100px',
          width: '400px'
        }}>
          <TextField
            hintText="Hint Text"
          /><br/>
          <br/>
          <TextField
            hintText="The hint text can be as long as you want, it will wrap."
          /><br/>
          <TextField
            defaultValue="Default Value"
          /><br/>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          /><br/>
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br/>
          <TextField
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
          /><br/>
          <TextField
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true}
            rows={2}
          />
        </Paper>
      </div>
  }
}

export default CreateRequest;
