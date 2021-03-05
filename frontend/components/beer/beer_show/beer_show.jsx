import React, { useState, useEffect } from "react";
import CheckInFormContainer from '../../check-in/check-in-form-container'
import BeerContentTop from './beer_content/beer_content_top'
import BeerContentBottom from './beer_content/beer_content_bottom'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const Beer = ({ match, beer, fetchBeer, currentUser }) => {

    const [update, setUpdate] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => { fetchBeer(match.params.beerId) }, [update])

    if (!beer) {
        return (
            <div className='main-outer'>
                <div className='home-grid'>
                </div>
            </div>
        )
    }
    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const checkIns = []
    let ratings = 0
    let totalRatings = 0
    beer.checkIns.forEach(checkIn => {
        if(checkIn.rating){
            ratings += checkIn.rating
            totalRatings ++
        }
        checkIns.push(<CheckInShowContainer key={checkIn.id} checkIn={checkIn} beer={beer} />)
    })

    const avgRating = totalRatings ? (ratings / totalRatings).toFixed(2) : 0

    return (
        <div className='main-outer'>

            <div className='home-grid'>

                {
                    openModal ?
                        <CheckInFormContainer
                            beer_id={beer.id}
                            user_id={currentUser.id}
                            setOpenModal={setOpenModal}
                        />
                        : null
                }

                <div className='beer-show-container'>
                    <BeerContentTop beer={beer} avgRating={avgRating} totalRatings={totalRatings}/>
                    <BeerContentBottom beer={beer} setOpenModal={setOpenModal} />
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <h4>Global Recent Activity</h4>
                        {beer.checkIns.length ? checkIns : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default Beer