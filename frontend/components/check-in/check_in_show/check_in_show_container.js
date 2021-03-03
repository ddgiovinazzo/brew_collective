import { connect } from 'react-redux';
import {fetchUser} from '../../../actions/user_actions'
import CheckInShow from './check_in_show'

const mSTP = (state, ownProps)=>{
    return{
        user: state.entities.users[ownProps.checkIn.user_id]
    }
}
const mDTP = (dispatch)=>{
    return{
        fetchUser: user_id => dispatch(fetchUser(user_id))
    }
}


export default connect(mSTP,mDTP)(CheckInShow)