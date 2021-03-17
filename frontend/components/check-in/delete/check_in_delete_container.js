import { connect } from 'react-redux';
import {deleteCheckIn} from '../../../actions/check_in_actions';
import CheckInDelete from './check_in_delete';



const mDTP = dispatch => {
  return {
    deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId)),
  };
};

export default connect(null, mDTP)(CheckInDelete)