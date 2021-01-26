import { connect } from 'react-redux';
import {clearErrors, addError } from '../../actions/session_actions';
import {createBeer} from '../../actions/beer_actions';
import {fetchBreweries, createBrewery} from '../../actions/brewery_actions';
import NewBeer from './new_beer';

const mSTP = ({entities:{breweries, users},session, errors}) => {
  return {
    errors: errors.beers,
    breweries: Object.values(breweries),
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    clearErrors: () => dispatch(clearErrors()),
    addError: (error) => dispatch(addError(error)),
    createBrewery: (brewery) => dispatch(createBrewery(brewery))
  };
};

export default connect(mSTP, mDTP)(NewBeer)