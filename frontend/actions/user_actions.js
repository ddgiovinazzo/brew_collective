import * as UserAPIUtil from '../util/user_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = (users)=>({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user)=>({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = userIds => dispatch =>(
    UserAPIUtil.fetchUsers(userIds)
    .then(users => dispatch(receiveUsers(users)))
)



export const fetchUser = userId => dispatch =>(
    UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)