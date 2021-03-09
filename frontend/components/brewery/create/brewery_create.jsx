import React, { useState, useEffect } from "react";
import { countryList, breweryTypes } from "./util";

const BreweryCreate = (props) => {
    const { brewery, setBrewery, setNewBrewery } = props

    const handleInput = (type) => {
        const newBrewery = Object.assign({}, brewery)
        return e => {
            newBrewery[type] = e.currentTarget.value
            setBrewery(newBrewery)
        }
    }
    const types = breweryTypes.map(type=>(
        <option key={type} value={type}>{type}</option>
    ))
    const countries = countryList.map(country=>(
        <option key={country} value={country}>{country}</option>
    ))

    return (
        <div className="brewery">
            <div className="cb-input-container">
                <label className='form-label' htmlFor="">BREWERY NAME</label>

                <div className='cb-input-lg input-cont'>
                    <input autoFocus className='input' onChange={handleInput('name')} type="" />
                </div>

            </div>

            <div className='cb-input-container'>
                <label className='form-label' htmlFor="">BREWERY TYPE</label>
                
                <div className='cb-input-lg input-cont'>
                    <select className='select' defaultValue="Brewery Type" onChange={handleInput('brewery_type')} >
                        <option disabled>Brewery Type</option>
                        {types}
                    </select>
                </div>

            </div>

            <div className='cb-input-container'>
                <label className='form-label' htmlFor="">BREWERY COUNTRY</label>


                <div className='cb-input-lg input-cont'>
                <input list="brewery-country"className='input' onChange={handleInput('country')} />
                    <datalist id="brewery-country" className='select' defaultValue="Brewery Country"  >
                        <option disabled>Brewery Country</option>
                        {countries}
                    </datalist>
                </div>

            </div>

            <div className='cb-input-container'>

                <p className='bc-cancel' onClick={() => setNewBrewery(false)}>Cancel New Brewery</p>

            </div>


        </div>

    )
}

export default BreweryCreate