import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS
} from '../actions/users';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case SIGNUP_SUCCESS:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    case SIGNUP_ERROR:
      return action.payload;
    case LOGOUT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
