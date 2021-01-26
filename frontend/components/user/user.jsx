import React from "react";
import { Link } from 'react-router-dom'
import Cover from '../cover'
import NavBarContainer from '../navbar/navbar_container'

class User extends React.Component {

    currentUserCheck() {
        return parseInt(this.props.match.params.userId) === this.props.currentUser.id
    }

    render() {
        return (

            <div>
                <header>
                </header>
                <div className='home-grid'>
                    

                    <Cover />
                    <div id='main'>
                        <div id='content-container'>
                            <div id='photobox'>

                            </div>
                            <div id='content'>

                            </div>
                        </div>
                        <div id='sidebar'>
                            <div id='wishlist-container'>
                                
                            </div>
                            <div id='top-beers'>

                            </div>
                            <div id='top-venues'>

                            </div>
                            <div id='likes'>

                            </div>
                        </div>
                    </div>


                </div>
                <footer id='footer-container'>

                </footer>

            </div>
        )
    }
}

export default User