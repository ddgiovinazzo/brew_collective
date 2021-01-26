import React from "react";
import { Link } from 'react-router-dom'
import Cover from '../cover'
import NavBarContainer from '../navbar/navbar_container'

class User extends React.Component {

    currentUserCheck(){
        return parseInt(this.props.match.params.userId) === this.props.currentUser.id
    }

    render() {
        return (

            <div>
                <header>
                </header>
                <div className='home-grid'>
                <Cover/>

                    <div id='main'>
                        <div id='content'>
                            
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

export default User