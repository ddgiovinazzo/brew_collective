import { connect } from 'react-redux';
import {createBeer} from '../../../actions/beer_actions';
import {createBrewery,clearBreweryErrors} from '../../../actions/brewery_actions';
import BeerCreate from './beer_create';
import { clearBeerErrors } from "../../../actions/beer_actions";

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
    clearBeerErrors: () => dispatch(clearBeerErrors()),
    createBrewery: (brewery, beer) => dispatch(createBrewery(brewery, beer))
  };
};

export default connect(mSTP, mDTP)(BeerCreate)