import { connect } from 'react-redux';
import BreweryBeers from './brewery_beers';

const mSTP = ({entities:{breweries},session}, {match}) => {
  return {
    brewery: breweries[match.params.breweryId],
    currentUserId: session.id
  };
};


export default connect(mSTP, null)(BreweryBeers)