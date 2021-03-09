import React from "react";
import {Link} from 'react-router-dom'
import Img from "../../../image/image";


const BeerContentTop = (props) => {
    const { beer, beer:{checkIns}, ratings, stats, brewery} = props

    const caps = ()=>{
        if(ratings.avg < 1) return window.zeroCaps
        else if(ratings.avg < 2) return window.oneCap
        else if(ratings.avg < 3) return window.twoCaps
        else if(ratings.avg < 4) return window.threeCaps
        else if(ratings.avg < 5) return window.fourCaps
         return window.fiveCaps
    }

    return (
        <div className='bct-container'>
            <div className='bct-row'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        <Img className="beer-img" src={beer.imageUrl} dft={window.defaultBeer} alt="beer"/>
                    </div>
                    <div className='bct-title'>
                        <h1>{beer.name}</h1>
                        <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>

                        <p>{beer.servingStyle}</p>

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
            <div className='bct-row'>
                <div className='bct-mid-inner-div'>
                    <p>{beer.abv}% ABV</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{beer.ibu} IBU</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <img className="rating" src={caps()} alt="" />
                    <p>({ratings.avg})</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{ratings.total} Ratings</p>
                </div>

            </div>

        </div>

    )
}



export default BeerContentTop