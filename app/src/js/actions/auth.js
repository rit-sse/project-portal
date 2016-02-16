'use strict';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
  return dispatch => {
    return dispatch({ type: LOGIN });
  };
}

export function logout() {
  return dispatch => {
    return dispatch({ type: LOGOUT });
  };
}
