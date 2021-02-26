import React from "react";
import {Link} from 'react-router-dom'

const Home = ({currentUser})=> {
        return (
            <div className="main-outer">

            <div className='home-grid'>
                <div id='main'>
                    <div id='content-container'>
                 
                        <div id='recent-activity'>
                            <h4>Recent Friend Activity</h4>
                            <p>You don't seem to have any recent activity!</p>
                        <Link to='/newbeer'>Add a Beer</Link>
                        <br/>
                        <Link to='/beers'>Beer Index</Link>
                        </div>
                    </div>
                    <div id='sidebar'>
                        <div className="personal-stats">
                            <div>
                            <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                            <p><i className="fas fa-user home-icon"></i> {currentUser.username}</p>

                            </div>
                            <div className='home-grid-container'>
                                <div className='home-grid-row'>
                                    <div>
                                        <p>0</p>
                                        <p>Total</p>
                                    </div>
                                    <div>
                                    <p>0</p>
                                        <p>Unique</p>
                                    </div>
                                </div>
                                <div className='home-grid-row'>
                                    <div>
                                    <p>0</p>
                                        <p>Badges</p>
                                    </div>
                                    <div>
                                    <p>0</p>
                                        <p>Friends</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        )
    
}

export default Home