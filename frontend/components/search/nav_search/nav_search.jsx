import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const NavSearch = ({ currentUserId, logout, fetchAllBeers }) => {

    const [update, setUpdate] = useState(0)
    useEffect(() =>fetchAllBeers(), [update])

    return (
        <div id='search-bar-container' >
            <input id="search-bar" placeholder="Find a beer..." type="text" />
            <i className="fas fa-search fa-med search-icon"></i>
        </div>

    )

}

export default NavSearch
