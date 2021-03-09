import { connect } from 'react-redux';
import {fetchCheckIns} from '../../../actions/check_in_actions';
import BeerShow from './beer_show';

const mSTP = ({entities:{users, beers, breweries},session}, ownProps) => {
  return {
    currentUser: users[session.id],
    beer: beers[ownProps.match.params.beerId],
    breweries
  };
};



export default connect(mSTP, null)(BeerShow)