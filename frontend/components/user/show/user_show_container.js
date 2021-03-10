import { connect } from 'react-redux';
import UserShow from './user_show';

const mSTP = ({entities:{breweries, users, beers},session}, {match}) => {
  return {
    currentUser: users[session.id],
    user: users[match.params.userId],
    breweries,
    beers
  };
};


export default connect(mSTP, null)(UserShow)