import { connect } from 'react-redux';
import {createCheckIn} from '../../actions/check_in_actions';
import CheckInForm from './check-in-form';
import {createAward} from '../../actions/award_actions'



const mDTP = dispatch => {
  return {
    createCheckIn: (checkIn) => dispatch(createCheckIn(checkIn)),
    createAward: (award) => dispatch(createAward(award)),
  };
};

export default connect(null, mDTP)(CheckInForm)