import React, { useState } from "react";
import Fallback from "../../fallback/fallback";
import UserContent from './user_content/user_content'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'
import {isEmpty} from '../util'

const UserShow = ({currentUser, user, breweries, beers}) => {
 
    if (!user || isEmpty(breweries) || isEmpty(beers)) return <Fallback/>

    const {checkIns} = user
    
    const noCheckIns = <p>This user has no activity.</p>
    const uniques = {}
    let uniquesCount = 0

    const checkInList = []

    checkIns.forEach(checkIn => {

        if (!uniques[checkIn.beerId]) {
            uniques[checkIn.beerId] = 1;
            uniquesCount++
        }
        
        const beer = beers[checkIn.beerId]
        const brewery = breweries[beer.breweryId]
        checkInList.push(<CheckInShowContainer key={checkIn.id} brewery={brewery} beer={beer} checkIn={checkIn}/>)
    })


    return (
        <div className='main-outer'>

            <div className='home-grid'>

                <div className='beer-show-container'>
                    <UserContent currentUser={currentUser} user={user} uniquesCount={uniquesCount} />
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <h4>{user.id === currentUser.id ? "Your Recent Activity" : "Recent Activity"}</h4>
                        {checkIns.length? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default UserShow