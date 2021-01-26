import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'



const mSTP = (state) => {
  return {currentUserId: state.session.id};
};
const mDTP = dispatch => {
  return {
    logout: (user) => dispatch(logout(user)),

  };
};

export default connect(mSTP, mDTP)(NavBar)