import { RECEIVE_CHECK_INS } from '../actions/check_in_actions';

const checkInsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHECK_INS:
      return action.checkIns;
    default:
      return state;
  }
};

export default checkInsReducer;