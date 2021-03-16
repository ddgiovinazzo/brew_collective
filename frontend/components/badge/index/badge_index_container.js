import { connect } from 'react-redux';
import BadgeIndex from './badge_index';
import {fetchAllBadges} from "../../../actions/badge_actions"


const mSTP = ({entities:{badges, users}}, {match: {params}}) => {
  return {
    badges: Object.values(badges),
    user: users[params.userId]
  }
};

const mDTP = dispatch => ({
    fetchAllBadges: () => dispatch(fetchAllBadges())
})

export default connect(mSTP, mDTP)(BadgeIndex)