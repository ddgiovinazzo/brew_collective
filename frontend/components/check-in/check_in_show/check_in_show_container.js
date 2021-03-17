import { connect } from 'react-redux';
import CheckInShow from './check_in_show'

const mSTP = ({entities:{users}, session}, ownProps)=>{
    return{
        user: users[ownProps.checkIn.userId],
        currentUser: users[session.id]
    }
}
// const mDTP = (dispatch)=>{
//     return{
//         fetchUser: user_id => dispatch(fetchUser(user_id))
//     }
// }


export default connect(mSTP,null)(CheckInShow)