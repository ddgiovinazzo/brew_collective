import { connect } from 'react-redux';
import {createBeer} from '../../actions/beer_actions';
import {createBrewery} from '../../actions/brewery_actions';
import BeerIndex from './beer_index';
import {fetchAllBeers, clearBeerErrors} from "../../actions/beer_actions";
import { clearBreweryErrors } from "../../actions/brewery_actions";

const mSTP = ({entities:{beers, users},session, errors}) => {
  return {
    errors: errors.breweries.concat(errors.beers),
    beers: Object.values(beers),
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer)),
    fetchAllBeers: () => dispatch(fetchAllBeers()),
    clearBeerErrors: () => dispatch(clearBeerErrors()),
    clearBreweryErrors: () => dispatch(clearBreweryErrors()),
    createBrewery: (brewery) => dispatch(createBrewery(brewery))
  };
};

export default connect(mSTP, mDTP)(BeerIndex)