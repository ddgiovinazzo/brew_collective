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
                        <Link to='/beer/new'>Add a Beer</Link>
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

export default Home