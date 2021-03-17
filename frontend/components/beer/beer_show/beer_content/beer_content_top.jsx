import React from "react";
import { Link } from 'react-router-dom'
import Img from "../../../image/image";


const BeerContentTop = (props) => {
    const { beer, beer: { checkIns }, ratings, stats, brewery } = props

    const caps = () => {
        if (ratings.avg < 1) return window.zeroCaps
        else if (ratings.avg < 2) return window.oneCap
        else if (ratings.avg < 3) return window.twoCaps
        else if (ratings.avg < 4) return window.threeCaps
        else if (ratings.avg < 5) return window.fourCaps
        return window.fiveCaps
    }

    return (
        <div className='bct-container'>
            <div className='bct-row'>

                <Link className='bct-img' to={`/beer/${beer.id}`}>
                    <Img className="beer-img" src={beer.imageUrl} dft={window.defaultBeer} alt="beer" />
                </Link>
                <div className="bct-content">
                    <div className="bct-content-top">
                        <h1>{beer.name}</h1>
                    </div>

                    <div className="bct-content-bottom">
                        <div className='bct-title brewery'>
                            <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
                            <p>{beer.servingStyle}</p>
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
                                    <p className="you">{stats.you}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='bct-row'>
                <div className='bct-mid-inner-div'>
                    <p>{beer.abv}% ABV</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{!beer.ibu ? "No" : beer.ibu} IBU</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <img className="rating" src={caps()} alt="" />
                    <p>({ratings.avg})</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{ratings.total} {ratings.total === 1 ? `Rating` : `Ratings`}</p>
                </div>

            </div>

        </div>

    )
}



export default BeerContentTop