import React, { useState } from "react";
import Fallback from "../../fallback/fallback";
import CheckInFormContainer from '../../check-in/check-in-form-container'
import BeerContentTop from './beer_content/beer_content_top'
import BeerContentBottom from './beer_content/beer_content_bottom'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const BeerShow = ({ currentUser, beer, breweries }) => {
    const [openModal, setOpenModal] = useState(false)

    if (!beer) return <Fallback/>
    const brewery = breweries[beer.breweryId]
    if (!brewery) return <Fallback/>
    
    const { checkIns, ratings } = beer

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

        if (
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        )
            stats.monthly++

        if (!uniques[checkIn.userId]) {
            uniques[checkIn.userId] = 1;
            stats.uniquesCount++
        }
        if (checkIn.userId === currentUser.id) stats.you++

        checkInList.push(<CheckInShowContainer key={checkIn.id} beer={beer} checkIn={checkIn} brewery={brewery} />)
    })


    return (
        <div className='main-outer'>

            <div className='home-grid'>

                {
                    openModal ?
                        <CheckInFormContainer
                            beer={beer}
                            user={currentUser}
                            setOpenModal={setOpenModal}
                        />
                        : null
                }

                <div className='beer-show-container'>
                    <BeerContentTop beer={beer} ratings={ratings} stats={stats} brewery={brewery} />
                    <BeerContentBottom beer={beer} setOpenModal={setOpenModal} />
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <h4>Global Recent Activity</h4>
                        {beer.checkIns.length ? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default BeerShow