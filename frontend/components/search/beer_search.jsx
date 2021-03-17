import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Img from '../image/image'


const Search = (props) => {
    const {beers, beerIndex, placeholder} = props
    const [searchText, setSearchText] = useState("")

    if(!beers)return null
    const handleSearch = (e) => {
        setSearchText(e.currentTarget.value)
    }

    const handleSort = (array) => {
        if (searchText)
            return array.sort((a, b) => {
                if (a.key[0].toLowerCase() === searchText[0].toLowerCase()) return -1
                else if (b.key[0].toLowerCase() === searchText[0].toLowerCase()) return 1
                else if (a.key < b.key) return -1
                else return 1
            })
        else return array
    }


    let results = []


    for (let i = 0; i < beers.length; i++) {
        const beer = beers[i];
        const result = (
            <div key={beer.name} className="search-results">
                <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
                <Link to={`/beer/${beer.id}`}>

                <Img className="beer-img" src={beer.imageUrl} dft={window.defaultBeer} alt={beer.name} />
                </Link>
            </div>
        )
        if (!searchText) results.push(result)
        if (searchText && beer.name.toLowerCase().includes(searchText.toLowerCase())) results.push(result)
    }

    const addBeer = (
        <div className="search-results">
                <p>Don't see the beer you're looking for?&nbsp;</p>
                <Link to={`/newbeer`}>You can add it here</Link>
        </div>
    )


    if (!results.length && !searchText) return null

    return (

        <div id='recent-activity' className="bidx beer-search">
            <div className="bidx-search-bar-container">
                <div className="bidx-input-container">
                    <i className="fas fa-search fa-2x search-icon"></i>
                    <input placeholder={placeholder} onChange={handleSearch} id="bidx-search-bar" type="text" />
                </div>
            </div>
            <div id='beer-index-list-container'>
                <ul>
                    {handleSort(results)}
                    {(results.length && beerIndex) || (searchText && beerIndex) ? addBeer : null}
                </ul>
            </div>
        </div>

    )
}

export default Search