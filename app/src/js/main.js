// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page.js';
import AdminPage from './components/admin-page.js';
import CreateRequest from './components/create-request-page.js';
import { Router, Route, browserHistory } from 'react-router'

let requests;
const mockRequests = [
  {
    project:'Holo Deck',
    part:'cube projector',
    quantity:1,
    price:'299.00',
    link:'amazon.com',
    purpose:'to project light',
    requester:'Tina Howard',
    approved:true,
    purchased:false
  },
  {
    project:'Coffee Code Book',
    part:'paper',
    quantity:100,
    price:'50.00',
    link:'amazon.com',
    purpose:'to print on',
    requester:'Jesse Jurman',
    approved:false,
    purchased:false,
  }
];


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainPage} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/new" component={CreateRequest} />
  </Router>
), document.getElementById("main"));
