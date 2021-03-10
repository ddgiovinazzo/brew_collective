import * as CheckInAPIUtil from '../util/check_in_util'

export const RECEIVE_CHECK_IN = 'RECEIVE_CHECK_IN'
export const RECEIVE_ALL = 'RECEIVE_ALL'

const receiveAll = (all)=>({
    type: RECEIVE_ALL,
    all
})

export const fetchCheckIns = checkIns => dispatch =>(
    CheckInAPIUtil.fetchCheckIns(checkIns)
    .then(checkIns => dispatch(receiveCheckIns(checkIns)))
)

export const createCheckIn = checkIn => dispatch =>(
    CheckInAPIUtil.createCheckIn(checkIn)
    .then(all => dispatch(receiveAll(all)))
)