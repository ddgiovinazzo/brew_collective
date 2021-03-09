import React, { useState, useEffect } from "react";
import beer_styles from './beer_styles';
import BreweryCreate from '../../brewery/create/brewery_create';
import { guideLines, renderErrors } from "./util";

const BeerCreate = (props) => {
    const { errors } = props
    const [update, setUpdate] = useState(0)
    const [brewerySearch, setBrewerySearch] = useState("")
    const [newBrewery, setNewBrewery] = useState(false)
    const [textLimit, setTextLimit] = useState(750)
    const [beer, setBeer] = useState({
        beer: {
            name: null,
            brewery_id: null,
            serving_style: null,
            abv: null,
            ibu: null,
            flavor_profile: null
        }
    })
    const [brewery, setBrewery] = useState({
        brewery: {
            name: null,
            type: null,
            country: null,
        }
    })

    useEffect(
        () => {if (props.errors.length > 0) props.clearBeerErrors()}, [update]
    )


    const handleSubmit = (e) => {
        e.preventDefault()
        const { createBeer, createBrewery } = props

        if (newBrewery) {
            return createBrewery(brewery, beer)
                .then((payload) => {history.push(`/beer/${payload.beer.id}`)})
        } else {
            return createBeer(beer)
                .then((payload) => history.push(`/beer/${payload.beer.id}`))
        }

    }

    const handleInput = (type, handleText) => {
        const newBeer = Object.assign({}, beer)
        return e => {
            newBeer[type] = e.currentTarget.value
            setBeer(newBeer)
            if (handleText) setTextLimit(750 - e.currentTarget.value.length)
        }
    }


    const breweryInput = (e) => {
        const breweryName = e.currentTarget.innerHTML
        document.getElementById("brewery-input").value = breweryName

        const newBeer = Object.assign({}, beer)
        newBeer["brewery_id"] = e.currentTarget.value
        setBeer(newBeer)
        setBrewerySearch("")
    }

    const beerOptions = beer_styles.map((beer, i) => <option key={i} value={beer}>{beer}</option>)

    const breweries = []

    props.breweries.forEach(brewery => {
        if (brewery.name.split(" ").join("").toLowerCase()
            .includes(brewerySearch.split(" ").join("").toLowerCase()))
            breweries.push(<li onClick={breweryInput} key={brewery.id} value={brewery.id}>{brewery.name}</li>)
    })

    const breweryList = (

        <div className='cb-input-lg input-cont brewery-list-cont'>
            <ul className="brewery-list">
                {breweries}
                <li onClick={() => { setNewBrewery(true); setBrewerySearch("") }}>Don't see your brewery? Click Here to add it.</li>
            </ul>
        </div>
    )
    const brewerySelect = (

        <div className='cb-input-container'>
            <label className='form-label' htmlFor="">BREWERY NAME</label>


            <div className='cb-input-lg input-cont '>
                <input id="brewery-input" onChange={(e) => setBrewerySearch(e.currentTarget.value)} className='input' type="" />
            </div>
            {brewerySearch ? breweryList : null}

        </div>

    )

    return (
        <div className='main-outer'>
            <div className='home-grid'>

                <form className={!props.errors.length ? 'cb-form' : 'cb-form cb-form-errors'} action="">
                    {guideLines}
                    {errors.length > 0 ? renderErrors(errors, 'cb-errors-container') : null}

                    <div className="cb-input-container">
                        <label className='form-label' htmlFor="">BEER NAME</label>

                        <div className='cb-input-lg input-cont'>
                            <input className='input' onChange={handleInput('name')} type="" />
                        </div>

                    </div>


                    {newBrewery ?
                        <BreweryCreate brewery={brewery} setBrewery={setBrewery} setNewBrewery={setNewBrewery} />
                        : brewerySelect
                    }

                    <div className='cb-custom-input-container'>

                        <div >
                            <label className='form-label' htmlFor="">ABV</label>

                            <div className='cb-input-sm input-cont'>
                                <input className='input' onChange={handleInput('abv')} />
                            </div>

                        </div>

                        <div >
                            <label className='form-label' htmlFor="">IBU</label>

                            <div className='cb-input-sm input-cont'>
                                <input className='input' onChange={handleInput('ibu')} />
                            </div>

                        </div>

                        <div>
                            <label className='form-label' htmlFor="">STYLE</label>

                            <div className='cb-select input-cont'>
                                <input list="serving-style" className='input' onChange={handleInput('serving_style')} />

                                <datalist id='serving-style' >
                                    <option>Select A Style</option>
                                    {beerOptions}
                                </datalist>
                            </div>

                        </div>
                    </div>

                    <div className='cb-input-container'>
                        <label className='form-label' htmlFor="">DESCRIPTION</label>

                        <div className='cb-textArea input-cont'>

                            <span className='counter'>{textLimit}</span>
                            <textarea className='textArea' onChange={handleInput('flavor_profile', true)} maxLength="750" />
                        </div>

                    </div>

                    <button onClick={handleSubmit} className='form-submit'>Add New Beer</button>

                </form>
            </div>
        </div>
    )

}
export default BeerCreate