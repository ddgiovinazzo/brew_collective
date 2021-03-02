import * as CheckInAPIUtil from '../util/check_in_util'

import { receiveBeer } from "./beer_actions";

export const RECEIVE_CHECK_IN = 'RECEIVE_CHECK_IN'


export const createCheckIn = checkIn => dispatch =>(
    CheckInAPIUtil.createCheckIn(checkIn.beer)
    .then(checkIn => dispatch(receiveBeer(checkIn.beer)))
)