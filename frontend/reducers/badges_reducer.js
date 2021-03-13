import { RECEIVE_ALL_BADGES } from '../actions/badge_actions';

const badgesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BADGES:
      return action.badges;
    default:
      return state;
  }
};

export default badgesReducer;