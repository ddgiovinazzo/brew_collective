import React, {useState} from "react";

const BeerContentBottom = ({ beer, setOpenModal}) => {
    if (!beer) return null
    const [shortenSentence, setShortenSentence] = useState(true)

    const shortenedSentence = (
        <div>
            <p>{beer.flavorProfile.slice(0, 83)}</p>
            <p className="psuedo-link" onClick={() => setShortenSentence(false)}> Show More</p>
        </div>
    )
    const regularSentence = (
        <div>
            <p>{beer.flavorProfile}</p>
            <p className="psuedo-link" onClick={() => setShortenSentence(true)}> Show Less</p>
        </div>
    )
    const smallSentence = (
        <div>
            <p>{beer.flavorProfile}</p>
        </div>
    )


    return(
        <div className='beer-content-bottom'>
        <div className='beer-content-bottom-details-container'>

            <div className='beer-content-bottom-details'>
                {
                    beer.flavorProfile.length < 83 ? smallSentence : shortenSentence ?
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
    )


}

export default BeerContentBottom