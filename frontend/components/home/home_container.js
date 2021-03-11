import { connect } from 'react-redux';
import Home from './home';
import { fetchCheckIns } from "../../actions/check_in_actions";


const mSTP = ({entities:{beers, users, checkIns, breweries},session}) => {
  return {
    beers,
    breweries,
    checkIns: Object.values(checkIns),
    currentUser: users[session.id]
  };
};

const mDTP = dispatch =>({
  fetchCheckIns: userIds => dispatch(fetchCheckIns(userIds))
})
export default connect(mSTP, mDTP)(Home)