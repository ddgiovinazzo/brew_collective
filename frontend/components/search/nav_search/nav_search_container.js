import { connect } from 'react-redux';
import { fetchAllBeers } from '../../../actions/beer_actions';
import NavSearch from './nav_search'

const mSTP = (state) => {
  return {
    beers: Object.values(state.entities.beers),
    currentUser: state.entities.users[state.session.id]

  };
};

const mDTP = dispatch => {
  return {
    fetchAllBeers: ()=> dispatch(fetchAllBeers())
  };
};

export default connect(mSTP, mDTP)(NavSearch)