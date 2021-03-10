import { RECEIVE_BREWERY, RECEIVE_ALL_BREWERIES } from '../actions/brewery_actions';
import { RECEIVE_ALL } from '../actions/check_in_actions';

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries;

    case RECEIVE_ALL:
      return Object.assign({}, state, { [action.all.brewery.id]: action.all.brewery });

    case RECEIVE_BREWERY:
      return Object.assign({}, state, { [action.brewery.id]: action.brewery });

    default:
      return state;
  }
};

export default breweriesReducer;