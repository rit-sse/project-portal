// request-list.js
// created by Jesse Jurman

import React, { Component } from 'react';
import { Table, TableHeaderColumn, TableRow,
          TableHeader, TableRowColumn, TableBody,
          Checkbox } from 'material-ui';

// The main page for the application
export class RequestList extends Component {
  render() {
    const requestRows = this.props.requests.map(request => {
      return <TableRow key={request.id} tooltip={request.lastModified}>
        <TableRowColumn>{request.project}</TableRowColumn>
        <TableRowColumn>{request.part}</TableRowColumn>
        <TableRowColumn>{request.quantity}</TableRowColumn>
        <TableRowColumn>{request.price}</TableRowColumn>
        <TableRowColumn>{request.link}</TableRowColumn>
        <TableRowColumn>{request.purpose}</TableRowColumn>
        <TableRowColumn>{request.requester}</TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={request.approved} disabled={true} />
        </TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={request.purchased} disabled={true} />
        </TableRowColumn>
      </TableRow>
    })
    return <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn tooltip="The Project">Project</TableHeaderColumn>
          <TableHeaderColumn tooltip="Part being ordered">Part</TableHeaderColumn>
          <TableHeaderColumn tooltip="How many are being ordered">Quantity</TableHeaderColumn>
          <TableHeaderColumn tooltip="Price + Shipping">Total Price</TableHeaderColumn>
          <TableHeaderColumn tooltip="Link to page to purchase">Link</TableHeaderColumn>
          <TableHeaderColumn tooltip="Why we need it">Purpose</TableHeaderColumn>
          <TableHeaderColumn tooltip="Team Lead">Requester</TableHeaderColumn>
          <TableHeaderColumn tooltip="Approval from Projects Lead">Approved?</TableHeaderColumn>
          <TableHeaderColumn tooltip="Confirmation of Purchasing">Purchased?</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true} displayRowCheckbox={false} adjustForCheckbox={false}>
        {requestRows}
      </TableBody>
    </Table>
  }
}

export default RequestList;
