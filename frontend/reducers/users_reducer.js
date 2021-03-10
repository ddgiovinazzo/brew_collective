import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_ALL } from '../actions/check_in_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL:
      return Object.assign({}, state, { [action.all.user.id]: action.all.user });
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      const newState = Object.assign({}, state)
      const users = Object.values(action.users)
      users.forEach(user=> newState[user.id] = user)
      return newState

    default:
      return state;
  }
};

export default usersReducer;