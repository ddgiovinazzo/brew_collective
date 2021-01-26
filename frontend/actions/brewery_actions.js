import * as BreweryAPIUtil from '../util/brewery_util'


export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES'
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY'

const receiveAllBreweries = (breweries)=>({
    type: RECEIVE_ALL_BREWERIES,
    breweries
})

const receiveBrewery = (brewery)=>({
    type: RECEIVE_BREWERY,
    brewery
})

export const fetchBreweries = brewery => dispatch =>(
    BreweryAPIUtil.fetchBreweries(brewery)
    .then(breweries => dispatch(receiveAllBreweries(breweries)))
)

export const createBrewery = brewery => dispatch =>(
    BreweryAPIUtil.createBrewery(brewery)
    .then(brewery => dispatch(receiveBrewery(brewery)))
)