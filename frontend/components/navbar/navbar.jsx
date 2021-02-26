import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <div className='header-container'>
                <div className='header-content-container'>


                        <Link to='/home' ><img  src={window.homeLogo} alt="" /></Link>

                <div className="nav-content-right">

                        <div className="dropdown-container">
                            <i className="far fa-2x fa-user-circle dropbtn"></i>
                            <div className="dropdown">
                                <Link className='nav-links' to={`/user/${this.props.currentUserId}`}>My Profile</Link>
                                <p onClick={() => this.props.logout()} className='nav-links' >Logout</p>
                            </div>
                        </div>

                        <div id='search-bar-container' >
                            <input id="search-bar" placeholder="Find a beer..." type="text" />
                            <i className="fas fa-search fa-med search-icon"></i>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default NavBar