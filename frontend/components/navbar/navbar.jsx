import React, { useState } from "react";
import { Link } from 'react-router-dom'

const NavBar = ({ currentUserId, logout }) => {

    const [renderDropdown, setRenderDropdown] = useState(false)
    const dropdown = (
        <div className="dropdown-outer" >

            <div  className="dropdown">
                <i className="arrow"></i>
                <Link className='nav-links' to={`/user/${currentUserId}`}>My Profile</Link>
                <p onClick={() => logout()} className='nav-links' >Logout</p>
            </div>
        </div>
    )

    return (
        <div className='header-container'>
            <div className='header-content-container'>


                <Link to='/home' ><img src={window.homeLogo} alt="" /></Link>

                <div className="nav-content-right">

                    <div className="dropdown-container">
                        <i className="far fa-2x fa-user-circle dropbtn"></i>
                        {dropdown}
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

export default NavBar