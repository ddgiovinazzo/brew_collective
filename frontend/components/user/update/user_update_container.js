import { connect } from 'react-redux';
import {updateUser} from '../../../actions/user_actions';
import UserUpdate from './user_update';
import { clearErrors } from "../../../actions/session_actions";

const mSTP = ({entities:{users},session, errors}) => {
  return {
    errors: errors.session,
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mSTP, mDTP)(UserUpdate)