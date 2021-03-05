import * as CheckInAPIUtil from '../util/check_in_util'

import { receiveBeer } from "./beer_actions";

export const RECEIVE_CHECK_IN = 'RECEIVE_CHECK_IN'
export const RECEIVE_CHECK_INS = 'RECEIVE_CHECK_INS'

const receiveCheckIns = (checkIns)=>({
    type: RECEIVE_CHECK_INS,
    checkIns
})

export const fetchCheckIns = checkIns => dispatch =>(
    CheckInAPIUtil.fetchCheckIns(checkIns)
    .then(checkIns => dispatch(receiveCheckIns(checkIns)))
)

export const createCheckIn = checkIn => dispatch =>(
    CheckInAPIUtil.createCheckIn(checkIn)
    .then(beer => dispatch(receiveBeer(beer)))
)