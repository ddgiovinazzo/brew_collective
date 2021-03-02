import { connect } from 'react-redux';
import {createCheckIn} from '../../actions/check_in_actions';
import CheckInForm from './check-in-form';


const mDTP = dispatch => {
  return {
    createCheckIn: (checkIn) => dispatch(createCheckIn(checkIn)),
  };
};

export default connect(null, mDTP)(CheckInForm)