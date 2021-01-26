import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS,
  ADD_SESSION_ERROR
} from '../actions/session_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case CLEAR_SESSION_ERRORS:
      return [];
    case ADD_SESSION_ERROR:
      return action.error
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};