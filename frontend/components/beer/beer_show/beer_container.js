import { connect } from 'react-redux';
import {createBeer, fetchBeer} from '../../../actions/beer_actions';
import {fetchAllBreweries, createBrewery, fetchBrewery} from '../../../actions/brewery_actions';
import Beer from './beer';
import { clearBeerErrors } from "../../../actions/beer_actions";
import { clearBreweryErrors } from "../../../actions/brewery_actions";

const mSTP = ({entities:{breweries, users, beers},session, errors}, ownProps) => {
  return {
    errors: errors.breweries.concat(errors.beers),
    currentUser: users[session.id],
    currentBeer: beers[ownProps.match.params.beerId],
  };
};

const mDTP = dispatch => {
  return {
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
  };
};

export default connect(mSTP, mDTP)(Beer)