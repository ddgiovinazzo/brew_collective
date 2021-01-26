import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import beers from './beer_errors_reducer'
import breweries from './breweries_errors_reducer'

export default combineReducers({
  session,
  beers,
  breweries
});