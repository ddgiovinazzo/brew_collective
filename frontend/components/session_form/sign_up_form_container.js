import { connect } from 'react-redux';
import { signup, clearErrors, addError } from '../../actions/session_actions';
import SignUp from './sign_up_form'

const mSTP = ({errors}) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    addError: (error) => dispatch(addError(error)),
  };
};

export default connect(mSTP, mDTP)(SignUp)