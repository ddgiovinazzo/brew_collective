import { combineReducers } from 'redux';

import users from './users_reducer';
import breweries from './breweries_reducer'
import beers from './beers_reducer'
import checkIns from './check_ins_reducer'
import badges from './badges_reducer'

export default combineReducers({
  users,
  breweries,
  beers,
  checkIns,
  badges
});