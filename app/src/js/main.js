// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page.js';

let requests;
const mockRequests = [
  {
    project:'Holo Deck',
    part:'cube projector',
    quantity:1,
    price:'299.00',
    link:'amazon.com',
    purpose:'to project light',
    requester:{name:'Tina Howard', email:'chh2538'},
    approved:[{name:'Laura King', email:'lxk3301'}],
    approvalsRequired:1,
    purchased:[],
    tracking:'',
    lastModified:'02/01/2016'
  },
  {
    project:'Coffee Code Book',
    part:'paper',
    quantity:100,
    price:'50.00',
    link:'amazon.com',
    purpose:'to print on',
    requester:{name:'Jesse Jurman', email:'jrj2703@rit.edu'},
    approved:[],
    approvalsRequired:1,
    purchased:[],
    tracking:'',
    lastModified:'12/01/2015'
  }
];

const requestQuery = new XMLHttpRequest();
requestQuery.open('GET', './purchaseList');
requestQuery.onload = function() {
    if (requestQuery.status === 200) {
        const requestString = requestQuery.responseText;
        requests = JSON.parse(requestString)
        ReactDOM.render(
      		<MainPage requests={requests} />
        , document.getElementById("main"));
    }
    else {
      // request failed, render anyways
      ReactDOM.render(
        <MainPage requests={mockRequests} />
      , document.getElementById("main"));
    }
};
requestQuery.send();
