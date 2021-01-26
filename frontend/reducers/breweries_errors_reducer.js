import {
  RECEIVE_BREWERY_ERRORS,
  CLEAR_BREWERY_ERRORS,
  ADD_BREWERY_ERROR
} from '../actions/brewery_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BREWERY_ERRORS:
      return action.errors
    case CLEAR_BREWERY_ERRORS:
      return [];
    case ADD_BREWERY_ERROR:
      return action.error
    default:
      return state;
  }
};