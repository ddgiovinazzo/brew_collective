import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllBeers } from '../../actions/beer_actions';
import NavBar from './navbar'

const mSTP = (state) => {
  return {
    beers: Object.values(state.entities.beers),
    currentUser: state.entities.users[state.session.id]

  };
};

const mDTP = dispatch => {
  return {
    logout: (user) => dispatch(logout(user)),
    fetchAllBeers: ()=> dispatch(fetchAllBeers())
  };
};

export default connect(mSTP, mDTP)(NavBar)