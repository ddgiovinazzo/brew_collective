import React from "react";
import Img from "../../../image/image";
import { Link } from "react-router-dom"



const BreweryContentTop = (props) => {
    const { brewery, brewery: { checkIns }, ratings, stats } = props

    const caps = () => {
        if (ratings.avg < 1) return window.zeroCaps
        else if (ratings.avg < 2) return window.oneCap
        else if (ratings.avg < 3) return window.twoCaps
        else if (ratings.avg < 4) return window.threeCaps
        else if (ratings.avg < 5) return window.fourCaps
        return window.fiveCaps
    }
    return (
        <div className='bct-container brewery'>
            <div className='bct-row brewery'>
                <Link className='bct-img' to={`/brewery/${brewery.id}`}>
                    <Img className="beer-img" src={brewery.imageUrl} dft={window.defaultBeer} alt="brewery" />
                </Link>
                <div className="bct-content">
                    <div className="bct-content-top">
                        <h1>{brewery.name}</h1>
                    </div>

                    <div className="bct-content-bottom">
                        <div className='bct-title brewery'>
                            <p>{brewery.country}</p>
                            <p>{brewery.breweryType}</p>
                        </div>

                        <div className='home-grid-container'>
                        <div className='home-grid-row'>
                                <div>
                                    <div>Total (
                                        
                                        <span className="btn btn-primary tooltip ci-question">?
                                            <div className="bottom ci-tips">
                                                Total Check-Ins All Time<i></i>
                                             </div>
                                        </span>

                                    )
                                    </div>
                                    <p>{checkIns.length}</p>
                                </div>
                                <div>
                                    <div>Unique (
                                        
                                        <span className="btn btn-primary tooltip ci-question">?
                                            <div className="bottom ci-tips">
                                                Number of Users All Time<i></i>
                                             </div>
                                        </span>

                                    )
                                    </div>
                                    <p>{stats.uniquesCount}</p>
                                </div>
                                <div>
                                    <p>You</p>
                                    <p>{stats.you}</p>
                                </div>
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
                    <p>{ratings.total} {ratings.total === 1 ? `Rating` : `Ratings`}</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <Link to={`/brewery/${brewery.id}/beers`}>
                        {brewery.beerTotal}
                        {brewery.beerTotal === 1 ? " Beer" : " Beers"}
                    </Link>
                </div>
            </div>

        </div>

    )
}


export default BreweryContentTop