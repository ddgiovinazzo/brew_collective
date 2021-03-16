import { connect } from 'react-redux';
import UserBeers from './user_beers';

const mSTP = ({entities:{users},session}, {match}) => {
  return {
    user: users[match.params.userId],
    currentUserId: session.id
  };
};


export default connect(mSTP, null)(UserBeers)