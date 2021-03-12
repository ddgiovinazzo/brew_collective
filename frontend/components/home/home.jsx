import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Fallback from "../fallback/fallback";
import CheckInShowContainer from '../check-in/check_in_show/check_in_show_container'
import { isEmpty } from '../user/util'
import Img from "../image/image";




const Home = ({ currentUser, fetchCheckIns, checkIns, beers, breweries }) => {

    const [update, setUpdate] = useState(0)
    useEffect(() => {
        fetchCheckIns(currentUser.friendIds.length ? currentUser.friendIds : "x")
    }, [update])

    if (isEmpty(breweries) || isEmpty(beers)) return <Fallback />

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
                    <div id='sidebar'>
                        <div className="personal-stats">
                            <div className="home-username">
                                <Link to={`user/${currentUser.id}`}>
                                    <Img className="beer-img user-img" src={currentUser.photoUrl} dft={window.defaultBeer} alt="user" />
                                </Link>
                                <Link to={`user/${currentUser.id}`}>
                                    <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                                </Link>
                                <p><i className="fas fa-user home-icon"></i> {currentUser.username}</p>
                            </div>
                            <div className='home-grid-container'>
                                <div className='home-grid-row'>
                                    <div>
                                        <p>{currentUser.checkIns.length}</p>
                                        <p>Total</p>
                                    </div>
                                    <div>
                                        <p>{currentUser.uniqueCheckIns}</p>
                                        <p>Unique</p>
                                    </div>
                                </div>
                                <div className='home-grid-row'>
                                    <div>
                                        <p>0</p>
                                        <p>Badges</p>
                                    </div>
                                    <div>
                                        <p>{currentUser.friendIds.length}</p>
                                        <p>Friends</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )

}

export default Home