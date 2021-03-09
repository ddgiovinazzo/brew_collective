import { connect } from 'react-redux';
import {createBeer} from '../../../actions/beer_actions';
import {fetchAllBreweries, createBrewery,clearBreweryErrors} from '../../../actions/brewery_actions';
import NewBeer from './new_beer';
import { clearBeerErrors } from "../../../actions/beer_actions";

const mSTP = ({entities:{breweries, users},session, errors}) => {
  return {
    errors: errors.breweries.concat(errors.beers),
    breweries: Object.values(breweries),
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer)),
    fetchAllBreweries: () => dispatch(fetchAllBreweries()),
    clearBeerErrors: () => dispatch(clearBeerErrors()),
    clearBreweryErrors: () => dispatch(clearBreweryErrors()),
    createBrewery: (brewery) => dispatch(createBrewery(brewery))
  };
};

export default connect(mSTP, mDTP)(NewBeer)