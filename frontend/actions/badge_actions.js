import * as BadgeAPIUtil from '../util/user_util'

export const RECEIVE_ALL_BADGES = 'RECEIVE_ALL_BADGES'

const receiveBadges = (badges)=>({
    type: RECEIVE_ALL_BADGES,
    badges
})

export const fetchAllBadges = () => dispatch =>(
    BadgeAPIUtil.fetchAllBadges()
    .then(badges => dispatch(receiveBadges(badges)))
)

