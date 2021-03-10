import { connect } from 'react-redux';
import Home from './home';


const mSTP = ({entities:{beers, users},session, errors}) => {
  return {
    errors: errors.beers,
    beers: Object.values(beers),
    currentUser: users[session.id]
  };
};


export default connect(mSTP, null)(Home)