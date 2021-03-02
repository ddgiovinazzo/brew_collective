import React, { useState, useEffect } from "react";
import CheckInFormContainer from '../../check-in/check-in-form-container'
import BeerContent from './beer_content'
import BeerActivity from './beer_activity'

const Beer = ({ match, currentBeer, fetchBeer, currentUser }) => {

    const [update, setUpdate] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => { fetchBeer(match.params.beerId)}, [update])

    if (!currentBeer) {
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
                            setUpdate={setUpdate}
                            update={update}
                            beer_id={currentBeer.id} 
                            user_id={currentUser.id} 
                            setOpenModal={setOpenModal} 
                        />
                        : null
                }

                {<BeerContent currentBeer={currentBeer} setOpenModal={setOpenModal}/>}
                {<BeerActivity/>}
            </div>

        </div>





    )
}

export default Beer