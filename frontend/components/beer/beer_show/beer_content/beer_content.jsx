import React, {useState} from "react";
import BeerContentTop from "./beer_content_top"

const BeerContent = ({ beer, setOpenModal }) => {
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
    return (
        <div className='beer-show-container'>

            <BeerContentTop beer={beer}/>


            <div className='beer-content-bottom'>
                <div className='beer-content-bottom-details-container'>

                    <div className='beer-content-bottom-details'>
                        {
                            beer.flavorProfile.length >= 83 && shortenSentence ?
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