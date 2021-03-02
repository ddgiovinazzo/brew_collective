import * as BeerAPIUtil from '../util/beer_util'

export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS'
export const RECEIVE_BEER = 'RECEIVE_BEER'

export const RECEIVE_BEER_ERRORS = 'RECEIVE_BEER_ERRORS'
export const CLEAR_BEER_ERRORS = 'CLEAR_BEER_ERRORS'
export const ADD_BEER_ERROR = 'ADD_BEER_ERROR'

const receiveAllBeers = (beers)=>({
    type: RECEIVE_ALL_BEERS,
    beers
})

export const receiveBeer = (beer)=>({
    type: RECEIVE_BEER,
    beer
})

export const receiveBeerErrors = (errors) => ({
    type: RECEIVE_BEER_ERRORS,
    errors
  });
  
  export const clearBeerErrors = () => ({
    type: CLEAR_BEER_ERRORS,
  });
  
  export const addBeerError = (error) => ({
    type: ADD_BEER_ERROR,
    error
  });

export const fetchAllBeers = () => dispatch =>(
    BeerAPIUtil.fetchAllBeers()
    .then(beers => dispatch(receiveAllBeers(beers)))
)

export const fetchBeer = beerId => dispatch =>(
    BeerAPIUtil.fetchBeer(beerId)
    .then(beer => dispatch(receiveBeer(beer)))
)

export const createBeer = beer => dispatch =>(
    BeerAPIUtil.createBeer(beer)
    .then(beer => dispatch(receiveBeer(beer)), err => (
      dispatch(receiveBeerErrors(err.responseJSON))
    ))
)

export const clearErrors = () => dispatch => (
    dispatch(clearBeerErrors())
  )
;

export const addError = (error) => dispatch => (
    dispatch(addBeerError(error))
  )
;