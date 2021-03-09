import * as BreweryAPIUtil from '../util/brewery_util'
import {receiveBeer, receiveBeerErrors} from '../actions/beer_actions'

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

export const fetchAllBreweries = () => dispatch =>(
    BreweryAPIUtil.fetchAllBreweries()
    .then(breweries => dispatch(receiveAllBreweries(breweries)))
)

export const fetchBrewery = breweryId => dispatch =>(
    BreweryAPIUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery)))
)

export const createBrewery = (brewery, beer) => dispatch =>(
    BreweryAPIUtil.createBrewery(brewery, beer)
    .then(beer => dispatch(receiveBeer(beer)), err => (
        dispatch(receiveBeerErrors(err.responseJSON))
      ))
    )