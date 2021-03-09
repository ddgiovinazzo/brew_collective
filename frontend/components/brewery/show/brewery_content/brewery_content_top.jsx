import React from "react";
import Img from "../../../image/image";


const BreweryContentTop = (props) => {
    const { brewery, brewery:{checkIns}, ratings, stats} = props





    const caps = ()=>{
        if(ratings.avg < 1) return window.zeroCaps
        else if(ratings.avg < 2) return window.oneCap
        else if(ratings.avg < 3) return window.twoCaps
        else if(ratings.avg < 4) return window.threeCaps
        else if(ratings.avg < 5) return window.fourCaps
         return window.fiveCaps
    }
    return (
        <div className='bct-container brewery'>
            <div className='bct-row brewery'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        <Img className="beer-img" src={brewery.imageUrl} dft={window.defaultBeer} alt="brewery"/>
                    </div>
                    <div className='bct-title brewery'>
                        <h1>{brewery.name}</h1>
                        <p>{brewery.country}</p>
                        <p>{brewery.breweryType}</p>

                    </div>

                </div>
                <div className='beer-content-right-container'>
                    <div className='home-grid-container'>
                        <div className='home-grid-row'>
                            <div>
                                <p>Total</p>
                                <p>{checkIns.length}</p>
                            </div>
                            <div>
                                <p>Unique</p>
                                <p>{stats.uniquesCount}</p>
                            </div>
                        </div>
                        <div className='home-grid-row'>
                            <div>
                                <p>Monthly</p>
                                <p>{stats.monthly}</p>
                            </div>
                            <div>
                                <p>You</p>
                                <p>{stats.you}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='bct-row brewery'>

                <div className='bct-mid-inner-div'>
                    <img className="rating" src={caps()} alt="" />
                    <p>({ratings.avg})</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{ratings.total} Ratings</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>
                        {brewery.beerTotal} 
                        {brewery.beerTotal === 1 ? " Beer" : " Beers"}
                    </p>
                </div>
            </div>

        </div>

    )
}


export default BreweryContentTop