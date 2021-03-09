import React, { useState } from "react";
import Fallback from "../../fallback/fallback";
import BreweryContent from './brewery_content/brewery_content'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const UserShow = ({currentUser, brewery, beers}) => {
 
    if (!currentUser) return <Fallback/>

    const {checkIns} = currentUser
    
    const noCheckIns = <p>This user has no activity.</p>
    const uniques = {}
    const uniquesCount = 0

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
                    {/* <BreweryContent brewery={brewery} ratings={ratings} stats={stats}/> */}
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <h4>Your Recent Activity</h4>
                        {checkIns.length? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default UserShow