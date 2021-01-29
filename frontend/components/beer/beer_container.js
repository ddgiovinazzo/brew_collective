import { connect } from 'react-redux';
import {createBeer, fetchBeer} from '../../actions/beer_actions';
import {fetchAllBreweries, createBrewery, fetchBrewery} from '../../actions/brewery_actions';
import Beer from './beer';
import { clearBeerErrors } from "../../actions/beer_actions";
import { clearBreweryErrors } from "../../actions/brewery_actions";

const mSTP = ({entities:{breweries, users, beers},session, errors}, ownProps) => {
  return {
    errors: errors.breweries.concat(errors.beers),
    breweries: Object.values(breweries),
    currentUser: users[session.id],
    currentBeer: beers[ownProps.match.params.beerId],
    currentBrewery: beers[ownProps.match.params.beerId] ? breweries[beers[ownProps.match.params.beerId].brewery_id] : null
  };
};

const mDTP = dispatch => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer)),
    fetchAllBreweries: () => dispatch(fetchAllBreweries()),
    fetchAllBeers: () => dispatch(fetchAllBeers()),
    clearBeerErrors: () => dispatch(clearBeerErrors()),
    clearBreweryErrors: () => dispatch(clearBreweryErrors()),
    createBrewery: (brewery) => dispatch(createBrewery(brewery)),
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
    fetchBrewery: (beweryId) => dispatch(fetchBrewery(beweryId))
  };
};

export default connect(mSTP, mDTP)(Beer)