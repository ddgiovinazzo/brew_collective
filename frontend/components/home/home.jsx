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
                        <div id='content'>
                            <Link className='form-submit' to='/beer/new'>Add a Beer</Link>
                        </div>
                    </div>

                    <div id='sidebar'>

                    </div>

                </div>
                    <footer id='footer-container'>

                    </footer>

            </div>
        )
    }
}

export default Home