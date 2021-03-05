import { connect } from 'react-redux';
import {fetchBeer} from '../../../actions/beer_actions';
import {fetchCheckIns} from '../../../actions/check_in_actions';
import {fetchUsers} from '../../../actions/user_actions';
import BeerShow from './beer_show';

const mSTP = ({entities:{users, beers},session, errors}, ownProps) => {
  return {
    errors: errors.breweries.concat(errors.beers),
    currentUser: users[session.id],
    beer: beers[ownProps.match.params.beerId],
  };
};

const mDTP = dispatch => {
  return {
    fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
    fetchCheckIns: (beerId) => dispatch(fetchCheckIns(beerId)),
    fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
  };
};

export default connect(mSTP, mDTP)(BeerShow)