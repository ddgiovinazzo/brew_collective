import * as AwardAPIUtil from '../util/award_util'
import {receiveUser} from './user_actions'

export const createAward = (award) => dispatch =>{
    
    AwardAPIUtil.createAward(award)
    .then(users => dispatch(receiveUser(users)))
}

export const deleteAward = (award) => dispatch =>(
    FriendshipAPIUtil.deleteAward(award)
    .then(user => dispatch(receiveUser(user)))
)