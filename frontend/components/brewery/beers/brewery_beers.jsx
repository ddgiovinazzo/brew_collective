import React from "react";
import Fallback from "../../fallback/fallback";
import BreweryContent from '../show/brewery_content/brewery_content'
import BeerSearch from "../../search/beer_search"

const BreweryBeers = ({ currentUserId, brewery }) => {
    
    if (!brewery) return <Fallback />

    const { checkIns, ratings } = brewery

    const uniques = {}
    const stats = {
        uniquesCount: 0,
        you: 0,
    }
    checkIns.forEach(checkIn => {
        if (!uniques[checkIn.userId]) {
            uniques[checkIn.userId] = 1;
            stats.uniquesCount++
        }
        if (checkIn.userId === currentUserId) stats.you++
    })

    return (
        <div className='main-outer'>
            <div className='home-grid'>

                <div className='beer-show-container'>
                    <BreweryContent brewery={brewery} ratings={ratings} stats={stats} />
                </div>

                <div className="content-container">
                    <BeerSearch beers={Object.values(brewery.beers)} placeholder={`Search Beers From ${brewery.name}`} />
                </div>
            </div>

        </div>





    )
}

export default BreweryBeers