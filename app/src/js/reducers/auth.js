'use strict';

import {
  LOGIN,
  LOGOUT
} from '../actions/auth';

export default function auth(state = { signedIn: false }, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
  case LOGIN:
    console.log("Signing in");
    return { signedIn: true };
  case LOGOUT:
    console.log("Signing out");
    return { signedIn: false };
  default:
    return state;
  }
}
