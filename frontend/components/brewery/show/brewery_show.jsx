import React, { useState } from "react";
import Fallback from "../../fallback/fallback";

import CheckInFormContainer from '../../check-in/check-in-form-container'
import BreweryContentTop from './brewery_content/brewery_content_top'
import BeerContentBottom from './brewery_content/beer_content_bottom'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const BreweryShow = ({currentUser, brewery, beers}) => {
 
    if (!brewery) return <Fallback/>

    const {checkIns, ratings} = brewery
    
    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const uniques = {}
    const stats = {
        uniquesCount: 0,
        you: 0,
        monthly: 0
    }
    const checkInList = []

    checkIns.forEach(checkIn => {
        const currentDate = new Date()
        const date = new Date(checkIn.createdAt)

        if(
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        )
            stats.monthly++

        if (!uniques[checkIn.userId]) {
            uniques[checkIn.userId] = 1;
            stats.uniquesCount++
        }
        if(checkIn.userId === currentUser.id) stats.you++
        
        checkInList.push(<CheckInShowContainer key={checkIn.id} brewery={brewery} beer={beers[checkIn.beerId]} checkIn={checkIn}/>)
    })


    return (
        <div className='main-outer'>

            <div className='home-grid'>

                <div className='beer-show-container'>
                    <BreweryContentTop brewery={brewery} ratings={ratings} stats={stats}/>
                    {/* <BeerContentBottom beer={beer} setOpenModal={setOpenModal} /> */}
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <h4>Global Recent Activity</h4>
                        {brewery.checkIns.length? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default BreweryShow