import { connect } from 'react-redux';
import BreweryShow from './beer_show';

const mSTP = ({entities:{breweries, users},session}) => {
  return {
    currentUser: users[session.id],
    brewery: breweries[ownProps.match.params.breweryId],
  };
};


export default connect(mSTP, null)(BreweryShow)