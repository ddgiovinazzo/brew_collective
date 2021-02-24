import React from "react";
import {Link} from 'react-router-dom'

class Home extends React.Component {

    render() {
        return (
            <div>
            <header>
            </header>
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
                    </div>
                </div>


            </div>

        </div>
        )
    }
}

export default Home