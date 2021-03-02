import React, { useState, useEffect } from "react";

const BeerContent = ({currentBeer, setOpenModal}) => {
    if(!currentBeer) return null
    
    const [shortenSentence, setShortenSentence] = useState(true)

    const shortenedSentence = (
        <div>
            <p>{currentBeer.flavorProfile.slice(0, 83)}</p>
            <p className="psuedo-link" onClick={() => setShortenSentence(false)}> Show More</p>
        </div>
    )
    const regularSentence = (
        <div>
            <p>{currentBeer.flavorProfile}</p>
            <p className="psuedo-link" onClick={() => setShortenSentence(true)}> Show Less</p>
        </div>
    )

    return (
        <div id='beer-content-container'>
            <div id='beer-content-top'>
                <div id='beer-content-top-img'>
                    <img src={`${currentBeer.imageUrl}`} alt="" />

                </div>
                <div id='beer-content-top-title'>
                    <h1>{currentBeer.name}</h1>
                    <p>{currentBeer.brewery.name}</p>
                    <p>{currentBeer.servingStyle}</p>

                </div>
                <div id='beer-content-top-social'>
                </div>


            </div>
            <div id='beer-content-middle'>
                <div id='beer-content-mid-details'>
                    <div id='abv-container'>
                        <p>{currentBeer.abv}ABV</p>
                    </div>

                    <div id='ibu-container'>
                        <p>{currentBeer.ibu}IBU</p>
                    </div>

                </div>

            </div>
            <div className='beer-content-bottom'>
                <div className='beer-content-bottom-details-container'>

                    <div className='beer-content-bottom-details'>
                        {
                            currentBeer.flavorProfile.length >= 83 && shortenSentence ?
                                shortenedSentence : regularSentence
                        }
                    </div>
                </div>

                <div className="beer-content-bottom-buttons-container">
                    <div
                        onClick={() => setOpenModal(true)}
                        className="btn btn-primary tooltip beer-content-bottom-buttons"
                    >

                        &#10003;

            <div className="bottom">
                            <p>Check-in this Beer <i></i></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default BeerContent