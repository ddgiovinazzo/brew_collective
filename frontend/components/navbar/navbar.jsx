import React, { useState, useEffect } from "react";
import NavSearchContainer from '../search/nav_search/nav_search_container'
import { Link } from 'react-router-dom'
import Img from "../image/image";


const NavBar = (props) => {
    const { currentUser, logout } = props
    const { fetchAllBeers, fetchAllUsers, fetchAllBreweries } = props
    const {searchText, setSearchText} = props

    const [update, setUpdate] = useState(0)
    useEffect(() => { fetchAllBeers(); fetchAllUsers(); fetchAllBreweries() }, [update])
    if(!currentUser) return null

    return (
        <div  className='header-container'>
            <div className='header-content-container'>


                <Link to='/home' ><img src={window.homeLogo} alt="" /></Link>

                <div className="nav-content-right">

                    <div className="dropdown-container">
                        <Img className="nav-search-img user-img" src={currentUser.photoUrl} dft={window.defaultBeer} alt="user" />

                        <div className="dropdown-outer" >

                            <div className="dropdown">
                                <i className="arrow"></i>
                                <Link className='nav-links' to={`/user/${currentUser.id}`}>My Profile</Link>
                                <p onClick={() => logout()} className='nav-links' >Logout</p>
                            </div>
                        </div>
                    </div>

                    {<NavSearchContainer searchText={searchText} setSearchText={setSearchText}/>}

                </div>
            </div>

        </div>

    )

}

export default NavBar