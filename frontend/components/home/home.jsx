import React, { useEffect, useState } from "react";
import Fallback from "../fallback/fallback";
import CheckInShowContainer from '../check-in/check_in_show/check_in_show_container'
import { isEmpty } from '../user/util'
import UserSidebar from "../user/user_sidebar"




const Home = ({ currentUser, fetchCheckIns, checkIns, beers, breweries }) => {

    const [update, setUpdate] = useState(0)
    useEffect(() => {
        fetchCheckIns(currentUser && currentUser.friendIds.length ? currentUser.friendIds : "x")
    }, [update])

    if (!currentUser || isEmpty(breweries) || isEmpty(beers)) return <Fallback />

    const noCheckIns = <p>You don't seem to have any recent activity!</p>
    const checkInList = []

    for (let i = checkIns.length - 1; i >= 0; i--) {
        const checkIn = checkIns[i];

        const beer = beers[checkIn.beerId]
        const brewery = breweries[beer.breweryId]
        checkInList.push(<CheckInShowContainer key={checkIn.id} brewery={brewery} beer={beer} checkIn={checkIn} />)
    }


    return (
        <div className="main-outer">

        <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>

                        <div id='recent-activity'>
                            <h4>Recent Friend Activity</h4>
                            {checkIns.length ? checkInList : noCheckIns}

                        </div>
                    </div>
                    <UserSidebar user={currentUser} isCurrentUser={true}/> 
                </div>


            </div>

        </div>
    )

}

export default Home