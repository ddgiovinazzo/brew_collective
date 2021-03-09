import { connect } from 'react-redux';
import NavSearch from './nav_search'

const mSTP = (state) => {
  return {
    beers: Object.values(state.entities.beers),
    currentUser: state.entities.users[state.session.id]

  };
};


export default connect(mSTP, null)(NavSearch)