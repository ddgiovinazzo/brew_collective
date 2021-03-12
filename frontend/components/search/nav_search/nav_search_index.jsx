import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Img from '../../image/image'

const NavSearchIndex = ({ beers, setSearchText, searchText}) => {
    const search = document.getElementById("search-bar")
    
    const clearSearch = () => {
        search.value = null
        setSearchText(null)
    }

    const handleSort = (array) => {
         return array.sort((a,b)=>{
            if(a.key[0].toLowerCase() === search.value[0].toLowerCase()) return -1
            else if( b.key[0].toLowerCase() === search.value[0].toLowerCase() ) return 1
            else if(a.key < b.key) return -1
            else return 1
         })
    }

    let results = []


    for (let i = 0; searchText && results.length < 4 && i < beers.length; i++) {
        const beer = beers[i];
        if(beer.name.toLowerCase().includes(search.value.toLowerCase()))
            results.push(
                <div key={beer.name} className="nsi-search-results">
                    <Link key={beer.id} onClick={clearSearch} key={beer.id} to={`/beer/${beer.id}`}>{beer.name}</Link>
                    <Img key={beer.imageUrl} className="nav-search-img" src={beer.imageUrl} dft={window.defaultBeer} alt={beer.name} />
                </div>
            )
    }



    return (
        <div className="nsi-container">
            <div className="nsi-header">
                <p>BEERS ({beers.length})</p>
            </div>
            <div className="nsi-search-results-container">
                {handleSort(results)}
                <div className="nsi-search-results">
                    <Link to="">See More Beers</Link>
                </div>
            </div>
        </div>
    )

}

export default NavSearchIndex