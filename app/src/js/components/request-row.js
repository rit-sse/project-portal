// request-row.js
// created by Jesse Jurman

import React, { Component } from 'react';
import { TableRow, TableRowColumn, Checkbox } from 'material-ui';

import LinkIcon from 'material-ui/lib/svg-icons/content/link';

// The main page for the application
export class RequestRow extends Component {
  render() {
    const {request} = this.props;

    return (<TableRow tooltip={request.lastModified}>
        <TableRowColumn>{request.project}</TableRowColumn>
        <TableRowColumn>{request.part}</TableRowColumn>
        <TableRowColumn>{request.quantity}</TableRowColumn>
        <TableRowColumn>{request.price}</TableRowColumn>
        <TableRowColumn>
          <a href={request.link}><LinkIcon color="DodgerBlue"/></a>
        </TableRowColumn>
        <TableRowColumn>{request.purpose}</TableRowColumn>
        <TableRowColumn>{request.requester}</TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={request.approved} disabled={true} />
        </TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={request.purchased} disabled={true} />
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default RequestRow;
