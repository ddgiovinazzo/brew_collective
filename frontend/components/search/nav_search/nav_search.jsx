import React, { useState, useEffect } from "react";
import NavSearchIndex from './nav_search_index'
import { Link } from 'react-router-dom'

const NavSearch = ({ beers, logout, fetchAllBeers }) => {  
    const [update, setUpdate] = useState(0)
    useEffect(() =>fetchAllBeers(), [update])

    const [searchText, setSearchText] = useState("")
    
    const handleSearch = (e)=>{
        setSearchText(e.currentTarget.value)
    }

    return (
        <div id='search-bar-container' >
            <div>

            <input onChange={handleSearch} id="search-bar" placeholder="Find a beer..." type="text" />
            <i className="fas fa-search fa-med search-icon"></i>
            </div>

            {searchText ?  <NavSearchIndex searchText={searchText} beers={beers}/> : null }
        </div>

    )

}

export default NavSearch
