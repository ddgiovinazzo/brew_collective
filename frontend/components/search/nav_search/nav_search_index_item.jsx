import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const NavSearchIndexItem = ({ beers, searchText }) => {
    const results = beers.filter(beer=>(
        beer.name.includes(searchText)
    ))

    const names = results.map(result=>result.name)

    return (
        <div className="nsi-item-container">
            <Link to={`/beer/${beer.name}`}></Link>
            <Img className="nav-search-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />
        </div>
    )

}

export default NavSearchIndexItem