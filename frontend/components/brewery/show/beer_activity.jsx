import React from "react";
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'


const BeerActivity = ({beer}) => {
    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const checkins = beer.checkIns.map(checkIn=> { return <CheckInShowContainer key={checkIn.id} checkIn={checkIn} beer={beer}/>})

    return (
        <div className="content-container">
            <div id='recent-activity'>
                <h4>Global Recent Activity</h4>
                {beer.checkIns.length ? checkins : noCheckIns}
            </div>
        </div>
    )
}

export default BeerActivity