import React from "react";
import { Link } from 'react-router-dom'
import Cover from '../cover'
import NavBarContainer from '../navbar/navbar_container'

class Beer extends React.Component {

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId)
        this.props.fetchAllBreweries()
    }
   

    currentUserCheck() {
        return parseInt(this.props.match.params.userId) === this.props.currentUser.id
    }

    render() {

        const beer = this.props.currentBeer

        const brewery = this.props.currentBrewery

        if(typeof beer === 'undefined' || typeof brewery === 'undefined'){
            return null
        }

        return (

            <div>
                <header>
                </header>
                <div className='home-grid'>

                    <div id='main'>
                        <div id='content-container'>
                            <div id='beer-content-container'>
                                <div id='beer-content'>
                                    <div id='beer-content-top'>
                                        <div id='beer-content-top-img'>
                                            {/* <img src={this.props.currentBeer ? this.props.currentBeer.photo_url : ''} alt=""/> */}
                                                                            
                                        </div>
                                        <div id='beer-content-top-title'>
                                            <h1>{this.props.currentBeer ? this.props.currentBeer.name : ''}</h1>
                                            <h1>{this.props.currentBrewery ? this.props.currentBrewery.name : ''}</h1>
                                            <h1>{this.props.currentBeer ? this.props.currentBeer.serving_style : ''}</h1>
                                            
                                        </div>
                                        <div id='beer-content-top-social'>
                                            <div id='beer-content-top-social-inner-top'>
                                                <div id='beer-content-top-social-inner-top-left'>
                                                    <div id='beer-content-top-social-inner-top-left-upper'>
                                                        <p>Total</p>
                                                    </div>
                                                    <div id='beer-content-top-social-inner-top-left-lower'>
                                                        <p>1.44M</p>
                                                    </div>
                                                </div>
                                                <div id='beer-content-top-social-inner-top-right'>
                                                    <div id='beer-content-top-social-inner-top-right-upper'>
                                                        <p>Unique</p>
                                                    </div>
                                                    <div id='beer-content-top-social-inner-top-right-lower'>
                                                        <p>537,46</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id='beer-content-top-social-inner-bottom'>
                                                <div id='beer-content-top-social-inner-bottom-left'>
                                                    <div id='beer-content-top-social-inner-bottom-left-upper'>
                                                        <p>Monthly</p>
                                                    </div>
                                                    <div id='beer-content-top-social-inner-bottom-left-lower'>
                                                        <p>3,838</p>
                                                    </div>
                                                </div>
                                                <div id='beer-content-top-social-inner-bottom-right'>
                                                    <div id='beer-content-top-social-inner-bottom-right-upper'>
                                                        <p>You</p>
                                                    </div>
                                                    <div id='beer-content-top-social-inner-bottom-right-lower'>
                                                        <p>0</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div id='beer-content-mid'>
                                        <div id='beer-content-mid-details'>
                                            <div id='abv-container'>
                                                <p>{this.props.currentBeer ? this.props.currentBeer.abv : ''}ABV</p>
                                            </div>

                                            <div id='ibu-container'>
                                                <p>{this.props.currentBeer ? this.props.currentBeer.ibu : ''}IBU</p>
                                            </div>
                                            <div id='current-rating-container'>

                                            </div>
                                            <div id='total-ratings-container'>

                                            </div>
                                        </div>
                                        <div id='beer-content-mid-description'>
                                            <div id='description-container'>
                                                <p>{this.props.currentBeer ? this.props.currentBeer.flavor_profile : ''}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='content'>

                            </div>
                        </div>
                        <div id='sidebar'>

                        </div>
                    </div>


                </div>
                <footer id='footer-container'>

                </footer>

            </div>
        )
    }
}

export default Beer