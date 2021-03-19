import React, { useState, useEffect } from "react";
import NavSearchContainer from '../search/nav_search/nav_search_container'
import { Link } from 'react-router-dom'
import Img from "../image/image";


const NavBar = (props) => {
    const { currentUser, logout } = props
    const { fetchAllBeers, fetchAllUsers, fetchAllBreweries } = props
    const { searchText, setSearchText } = props
    const { dropdown, setDropdown } = props

    const [update, setUpdate] = useState(0)
    useEffect(() => { fetchAllBeers(); fetchAllUsers(); fetchAllBreweries() }, [update])
    if (!currentUser) return null

    const handleDropdown = (e) => {
        e.stopPropagation()
        if (searchText) setSearchText(null)
        dropdown ? setDropdown(false) : e.button != 2 ? setDropdown(true) : null
    }

    
    return (
        <div className='header-container'>
            <div className='header-content-container'>


                <Link to='/home' ><img src={window.homeLogo} alt="" /></Link>

                <div className="nav-content-right">
                    <div onMouseDown={handleDropdown}>
                        <Img
                            className="nav-search-img user-img"
                            src={currentUser.photoUrl}
                            dft={window.defaultBeer}
                            alt="user"
                        />
                    </div>

                    {
                        dropdown ?
                            <div
                                className="dropdown-container"
                                onClick={() => setDropdown(false)}
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                <div className="dropdown">
                                    <i className="arrow"></i>
                                    <Link className='nav-links' to={`/`}>Recent Activity</Link>
                                    <Link className='nav-links' to={`/user/${currentUser.id}`}>My Profile</Link>
                                    <Link className='nav-links' to={`/user/${currentUser.id}/beers`}>Beer History</Link>
                                    <Link className='nav-links' to={`/user/${currentUser.id}/friends`}>Friends</Link>
                                    <Link className='nav-links' to={`/account`}>Account Settings</Link>
                                    <p onClick={() => logout()} className='nav-links' >Logout</p>
                                </div>
                            </div>
                            : null
                    }

                    {<NavSearchContainer
                        searchText={searchText} 
                        setSearchText={setSearchText}
                        dropdow={dropdown}
                        setDropdown={setDropdown}
                    />}

                </div>
            </div>

        </div>

    )

}

export default NavBar