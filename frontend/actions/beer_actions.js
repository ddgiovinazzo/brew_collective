import * as BeerAPIUtil from '../util/beer_util'

export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS'
export const RECEIVE_BEER = 'RECEIVE_BEER'

const receiveAllBeers = (beers)=>({
    type: RECEIVE_ALL_BEERS,
    beers
})

const receiveBeer = (beer)=>({
    type: RECEIVE_BEER,
    beer
})

export const fetchAllBeers = () => dispatch =>(
    BeerAPIUtil.fetchAllBeers()
    .then(beers => dispatch(receiveAllBeers(beers)))
)

export const createBeer = beer => dispatch =>(
    BeerAPIUtil.createBeer(beer)
    .then(beer => dispatch(receiveBeer(beer)))
)