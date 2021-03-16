import React from "react";
import Fallback from "../../fallback/fallback";
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'
import {isEmpty} from '../util'
import UserSidebar from "../user_sidebar"



const UserShow = ({user, breweries, beers, currentUser}) => {
 
    if (!user || isEmpty(breweries) || isEmpty(beers)) return <Fallback/>

    const {checkIns} = user
    
    const noCheckIns = <p>This user has no activity.</p>
    const checkInList = []

    const isCurrentUser = user.id === currentUser.id
    checkIns.forEach(checkIn => {
        const beer = beers[checkIn.beerId]
        const brewery = breweries[beer.breweryId]
        checkInList.push(<CheckInShowContainer key={checkIn.id} brewery={brewery} beer={beer} checkIn={checkIn}/>)
    })

    return (
        <div className="main-outer">

            <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>

                        <div id='recent-activity'>
                            <h4>{isCurrentUser ? `Your` : `${user.firstName}'s`} Recent Activity</h4>
                            {checkIns.length ? checkInList : noCheckIns}
                        </div>
                    </div>
                    <UserSidebar user={user} isCurrentUser={isCurrentUser} currentUser={currentUser}/> 
                </div>


            </div>

        </div>
    )

}

export default UserShow