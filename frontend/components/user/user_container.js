import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import User from './user'



const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {

  };
};

export default connect(mSTP, mDTP)(User)