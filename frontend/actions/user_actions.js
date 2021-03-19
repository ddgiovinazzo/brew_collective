import * as UserAPIUtil from '../util/user_util'
import {receiveErrors} from '../actions/session_actions'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveAllUsers = (users)=>({
    type: RECEIVE_ALL_USERS,
    users
})
export const receiveUsers = (users)=>({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user)=>({
    type: RECEIVE_USER,
    user
})

export const fetchAllUsers = () => dispatch =>(
    UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
)

export const fetchUser = userId => dispatch =>(
    UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)

export const updateUser = user => dispatch =>(
    UserAPIUtil.updateUser(user)
    .then(user => (
        dispatch(receiveUser(user))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
      ))
)
export const updateUserPhoto = user => dispatch =>{
    UserAPIUtil.updateUserPhoto(user)
    .then(user => (dispatch(receiveUser(user))))
}