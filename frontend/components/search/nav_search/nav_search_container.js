import { connect } from 'react-redux';
import NavSearch from './nav_search'
import {withRouter} from "react-router-dom"

const mSTP = (state) => {
  return {
    beers: Object.values(state.entities.beers),
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch =>({
})


export default withRouter(connect(mSTP, null)(NavSearch))