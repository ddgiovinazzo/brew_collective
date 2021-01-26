import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'



const mDTP = dispatch => {
  return {
    logout: (user) => dispatch(logout(user)),

  };
};

export default connect(null, mDTP)(NavBar)