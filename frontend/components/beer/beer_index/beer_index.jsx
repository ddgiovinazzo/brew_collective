import React, { useState } from "react";
import BeerSearch from "../../search/beer_search"


const BeerIndex = ({beers}) => {

    return (
        <div className="main-outer">
            <div className='home-grid'>
                <div id='content-container'>
                    {<BeerSearch beers={beers} beerIndex={true}/>}
                </div>
            </div>

        </div>
    )
}

export default BeerIndex