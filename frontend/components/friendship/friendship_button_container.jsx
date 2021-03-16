import { connect } from 'react-redux';
import FriendshipButton from './friendship_button';
import { createFriendship, updateFriendship, deleteFriendship } from "../../actions/friendship_actions";

const mSTP = ({entities:{users},session}) => ({
    currentUser: users[session.id]
})
const mDTP = dispatch =>({
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    updateFriendship: friendship => dispatch(updateFriendship(friendship)),
    deleteFriendship: friendship => dispatch(deleteFriendship(friendship))
})

export default connect(mSTP, mDTP)(FriendshipButton)