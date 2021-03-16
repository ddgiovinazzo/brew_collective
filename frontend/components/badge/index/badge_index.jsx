import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Img from '../../image/image'


const BadgeIndex = (props) => {
    const { badges, user, fetchAllBadges } = props
    const [update, setUpdate] = useState(0)

    useEffect(() => {fetchAllBadges() }, [update])

    if (!badges || !user) return null

    const badgeList = badges.map(badge => {
        const award = user.awards[badge.name]
        const url =  award ? award.badge.imageUrl : ""
        return(
            <div key={badge.name} className="nsi-search-results">
                <Img className="nav-search-img" src={url} dft={window.defaultBadge} alt={badge.name} />
            </div>
        )
    })



    return (
        <div className="main-outer">
            <div className='home-grid'>
                <div id='content-container'>

                    <div id='recent-activity' className="bidx">
                                {badgeList}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BadgeIndex