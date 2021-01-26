import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <div className='header-container'>
                <div className='header-content-container'>


                    <Link to='/home' className='kegger-nav-container'><img id="kegger-logo-nav" src={window.kegger} alt="" /></Link>

                    <div className='header-links'>
                        <Link to='/home' >The Pub</Link>
                        <Link to='/home' >Top Rated</Link>
                        <Link to='/home' >Supporter</Link>
                        <Link to='/home' >Help</Link>


                    </div>
                    <div className="dropdown-container">
                        <i className="far fa-2x fa-user-circle dropbtn"></i>
                        <div className="dropdown">
                            <Link className='nav-links' to={`/user/${this.props.currentUserId}`}>My Profile</Link>
                            <p onClick={() => this.props.logout()} className='nav-links' >Logout</p>
                        </div>
                    </div>

                    <div id='search-bar-container' >
                        <input id="search-bar" placeholder="Find a beer, brewery, or bar..." type="text" />
                        <i className="fas fa-search fa-med"></i>
                    </div>
                </div>

            </div>

        )
    }
}

export default NavBar