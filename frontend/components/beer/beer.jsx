import React from "react";
import { Link } from 'react-router-dom'

class Beer extends React.Component {

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId)
    }

    render() {
        // debugger
        const { currentBeer } = this.props


        if (typeof currentBeer === 'undefined') {
            return (
                <div className='main-outer'>
                    <div className='home-grid'>
                    </div>
                </div>
            )
        }

        return (

            <div className='main-outer'>

                <div className='home-grid'>

                        <div id='beer-content-container'>
                                <div id='beer-content-top'>
                                    <div id='beer-content-top-img'>
                                        <img src={`${currentBeer.imageUrl}`} alt=""/>

                                    </div>
                                    <div id='beer-content-top-title'>
                                        <h1>{currentBeer.name}</h1>
                                        <h1>{currentBeer.brewery.name}</h1>
                                        <h1>{currentBeer.servingStyle}</h1>

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
                                <div id='beer-content-middle'>
                                    <div id='beer-content-mid-details'>
                                        <p>{currentBeer.flavorProfile}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>





        )
    }
}

export default Beer