import { connect } from 'react-redux';
import UserFriends from './user_friends';

const mSTP = ({entities:{users},session}, {match}) => {
  return {
    users,
    user: users[match.params.userId],
    currentUserId: session.id
  };
};


export default connect(mSTP, null)(UserFriends)