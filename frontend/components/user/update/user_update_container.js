import { connect } from 'react-redux';
import {createBeer} from '../../../actions/beer_actions';
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
  };
};

export default connect(mSTP, mDTP)(UserUpdate)