import { connect } from 'react-redux';
import FriendshipButton from './friendship_button';
import { createFriendship, updateFriendship, deleteFriendship } from "../../actions/friendship_actions";

const mDTP = dispatch =>({
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    updateFriendship: friendship => dispatch(updateFriendship(friendship)),
    deleteFriendship: friendship => dispatch(deleteFriendship(friendship))
})

export default connect(null, mDTP)(FriendshipButton)