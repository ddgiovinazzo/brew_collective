import { connect } from 'react-redux';
import {fetchBeer} from '../../../actions/beer_actions';
import BeerShow from './beer_show';

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

export default connect(mSTP, mDTP)(BeerShow)