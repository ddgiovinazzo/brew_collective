import { connect } from 'react-redux';
import UserShow from './user_show';

const mSTP = ({entities:{breweries, users, beers}, session}, {match}) => {
  return {
    user: users[match.params.userId],
    breweries,
    beers,
    currentUser: users[session.id]
  };
};


export default connect(mSTP, null)(UserShow)