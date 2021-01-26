import {
  RECEIVE_BEER_ERRORS,
  CLEAR_BEER_ERRORS,
  ADD_BEER_ERROR
} from '../actions/beer_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BEER_ERRORS:
      return action.errors
    case CLEAR_BEER_ERRORS:
      return [];
    case ADD_BEER_ERROR:
      return action.error
    default:
      return state;
  }
};