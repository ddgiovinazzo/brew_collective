import * as FriendshipAPIUtil from '../util/friendship_util'
import {receiveUsers} from './user_actions'

export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES'
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY'

export const createFriendship = (friendship) => dispatch =>(
    FriendshipAPIUtil.createFriendship(friendship)
    .then(users => dispatch(receiveUsers(users)))
)
export const updateFriendship = (friendship) => dispatch =>(
    FriendshipAPIUtil.updateFriendship(friendship)
    .then(users => dispatch(receiveUsers(users)))
)
export const deleteFriendship = (friendshipId) => dispatch =>(
    FriendshipAPIUtil.deleteFriendship(friendshipId)
    .then(users => dispatch(receiveUsers(users)))
)