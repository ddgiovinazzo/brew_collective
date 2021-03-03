import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'


const BeerActivity = ({currentBeer}) => {
    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const checkins = currentBeer.checkIns.map(checkIn=> { return <CheckInShowContainer key={checkIn.id} checkIn={checkIn}/>})

    return (
        <div className="content-container">
            <div id='recent-activity'>
                <h4>Global Recent Activity</h4>
                {currentBeer.checkIns.length ? checkins : noCheckIns}
            </div>
        </div>
    )
}

export default BeerActivity