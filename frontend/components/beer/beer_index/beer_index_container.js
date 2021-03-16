import { connect } from 'react-redux';
import BeerIndex from './beer_index';


const mSTP = ({entities:{beers}}) => {
  return {
    beers: Object.values(beers)
  };
};


export default connect(mSTP, null)(BeerIndex)