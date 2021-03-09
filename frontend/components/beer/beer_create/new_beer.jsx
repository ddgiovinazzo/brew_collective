import React, { useState, useEffect } from "react";
import beer_styles from './beer_styles';
import BreweryCreate from '../../brewery/brewery_create/brewery_create';
import { guideLines, renderErrors } from "./util";

const NewBeer = (props) => {
    const { errors } = props
    const [update, setUpdate] = useState(false)
    const [createBrewery, setCreateBrewery] = useState(false)
    const [textLimit, setTextLimit] = useState(750)
    const [beer, setBeer] = useState({
        name: null,
        brewery_id: null,
        serving_style: null,
        abv: null,
        ibu: null,
        flavor_profile: null
    })
    const [brewery, setBrewery] = useState({
        brewery: {
            name: null,
            type: null,
            country: null,
        }
    })

    useEffect(() => {
        if (props.errors.length > 0) {
            props.clearBreweryErrors()
            props.clearBeerErrors()
        }
        props.fetchAllBreweries()
    }, [update])


    const handleSubmit = (e) => {
        e.preventDefault()
        const { createBeer, createBrewery } = props
        const { clearBreweryErrors, clearBeerErrors, history } = props
        if (errors.length > 0) { clearBreweryErrors(); clearBeerErrors() }

        const newBeer = Object.assign({}, beer)

        if (createBrewery && Object.values(newBeer).every(attr => attr)) {
            createBrewery(brewery)
                .then(
                    payload => {
                        newBeer.brewery_id = payload.brewery.id

                        createBeer(newBeer)
                            .then((payload) => history.push(`/beer/${payload.beer.id}`))
                    }
                )
        } else {
            createBeer(newBeer)
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

    const handleBrewery = (e) => {
        console.log(e.currentTarget.innerHTML)
        if (e.currentTarget.innerHTML === "Don't see your brewery? Click Here to add it.") {
            setCreateBrewery(true)
        } else {
            handleInput("brewery_id")
        }
    }

    const beerOptions = beer_styles.map((beer, i) => <option key={i} value={beer}>{beer}</option>)

    const breweries = props.breweries.map(brewery => <li onClick={handleBrewery} key={brewery.id} value={brewery.id}>{brewery.name}</li>)


    const brewerySelect = (

        <div className='cb-input-container'>
            <label className='form-label' htmlFor="">BREWERY NAME</label>


            <div className='cb-input-lg input-cont'>

                <ul className="brewery-list">
                {breweries}
                {breweries}
                {breweries}
                {breweries}
                {breweries}
                {breweries}
                {breweries}
                <li onClick={handleBrewery} value={"hey"}>Don't see your brewery? Click Here to add it.</li>
                </ul>
                {/* <input list="brewery-name"className='input'onChange={handleBrewery} />
                    <datalist className="dataList" id="brewery-name">

                    <option disabled>Brewery Name</option>
                    {breweries}
                    </datalist> */}
            </div>

        </div>

    )

    return (
        <div className='main-outer'>
            <div className='home-grid'>

                <form onSubmit={handleSubmit} className={!props.errors.length ? 'cb-form' : 'cb-form cb-form-errors'} action="">
                    {guideLines}
                    <div className='cb-errors-container'>
                    {errors.length > 0 ? renderErrors(errors) : null}

                    </div>

                    <div className="cb-input-container">
                        <label className='form-label' htmlFor="">BEER NAME</label>

                        <div className='cb-input-lg input-cont'>
                            <input className='input' onChange={handleInput('name')} type="" />
                        </div>

                    </div>


                    {createBrewery ?
                        <BreweryCreate brewery={brewery} setBrewery={setBrewery} setCreateBrewery={setCreateBrewery} />
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
                                <select className='select' onChange={handleInput('serving_style', false)}>
                                    <option>Select A Style</option>
                                    {beerOptions}
                                </select>
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

                </form>
            </div>
        </div>
    )

}
export default NewBeer