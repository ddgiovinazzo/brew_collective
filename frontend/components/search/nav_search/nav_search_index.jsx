import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const NavSearchIndex = ({ beers, searchText }) => {
    const results = beers.filter(beer=>(
        beer.name.includes(searchText)
    ))

    const names = results.map(result=>result.name)

    return (
        <div className="nsi-container">
            <div className="nsi-header">
                <p>BEERS ({beers.length})</p>
            </div>
                <p>{names}</p>
        </div>
    )

}

export default NavSearchIndex