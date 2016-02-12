// request-list.js
// created by Jesse Jurman

import React, { Component } from 'react';
import { Table, TableHeaderColumn, TableRow,
          TableHeader, TableRowColumn, TableBody,
          Checkbox } from 'material-ui';
import RequestRow from './request-row';

// The main page for the application
export class RequestList extends Component {
  render() {
    const requestRows = this.props.requests.map(request => {
      return (<RequestRow key={request.id} request={request} />);
    });
    return (<Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Project</TableHeaderColumn>
          <TableHeaderColumn>Part</TableHeaderColumn>
          <TableHeaderColumn>Quantity</TableHeaderColumn>
          <TableHeaderColumn>Total Price</TableHeaderColumn>
          <TableHeaderColumn>Link</TableHeaderColumn>
          <TableHeaderColumn>Purpose</TableHeaderColumn>
          <TableHeaderColumn>Requester</TableHeaderColumn>
          <TableHeaderColumn>Approved?</TableHeaderColumn>
          <TableHeaderColumn>Purchased?</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true} displayRowCheckbox={false} adjustForCheckbox={false}>
        {requestRows}
      </TableBody>
    </Table>);
  }
}

export default RequestList;
