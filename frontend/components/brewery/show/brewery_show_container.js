import { connect } from 'react-redux';
import BreweryShow from './brewery_show';

const mSTP = ({entities:{breweries, users, beers},session}, {match}) => {
  return {
    currentUser: users[session.id],
    brewery: breweries[match.params.breweryId],
    beers
  };
};


export default connect(mSTP, null)(BreweryShow)