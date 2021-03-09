import React, { useState, useEffect } from "react";
import NavSearchContainer from '../search/nav_search/nav_search_container'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const { currentUserId, logout} = props
    const {fetchAllBeers, fetchAllUsers, fetchAllBreweries } = props
    const [renderDropdown, setRenderDropdown] = useState(false)
    const [update, setUpdate] = useState(0)
    useEffect(() =>{fetchAllBeers(); fetchAllUsers(); fetchAllBreweries()}, [update])
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

                    {<NavSearchContainer/>}
                    
                </div>
            </div>

        </div>

    )

}

export default NavBar