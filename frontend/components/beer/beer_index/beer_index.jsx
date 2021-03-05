import React from "react";
import {Link} from 'react-router-dom'

class BeerIndex extends React.Component {



    render() {

        const beers = this.props.beers.map((beer, i)=>(
            <Link key={i} to={`/beer/${beer.id}`}>{beer.name}</Link>
        ))
        return (
            <div className="main-outer">
            <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>
                 
                        <div id='recent-activity'>
                            <h4>Beer Index</h4>
                            <div id='beer-index-list-container'>
                                <ul>
                                    {beers}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id='sidebar'>
                    </div>
                </div>


            </div>

        </div>
        )
    }
}

export default BeerIndex