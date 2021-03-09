import { connect } from 'react-redux';
import UserShow from './user_show';

const mSTP = ({entities:{breweries, users, beers},session}) => {
  return {
    currentUser: users[session.id],
    breweries,
    beers
  };
};


export default connect(mSTP, null)(UserShow)