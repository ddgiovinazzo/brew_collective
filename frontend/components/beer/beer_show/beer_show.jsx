import React, { useState, useEffect } from "react";
import CheckInFormContainer from '../../check-in/check-in-form-container'
import BeerContent from './beer_content/beer_content'
import BeerActivity from './beer_activity'

const Beer = ({ match, beer, fetchBeer, currentUser }) => {

    const [update, setUpdate] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => { fetchBeer(match.params.beerId)}, [update])

    if (!beer) {
        return (
            <div className='main-outer'>
                <div className='home-grid'>
                </div>
            </div>
        )
    }


    
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

                {<BeerContent beer={beer} setOpenModal={setOpenModal}/>}
                {<BeerActivity beer={beer} />}
            </div>

        </div>





    )
}

export default Beer