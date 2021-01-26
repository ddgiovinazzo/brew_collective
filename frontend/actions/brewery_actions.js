import * as BreweryAPIUtil from '../util/brewery_util'

export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES'
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY'

export const RECEIVE_BREWERY_ERRORS = 'RECEIVE_BREWERY_ERRORS'
export const CLEAR_BREWERY_ERRORS = 'CLEAR_BREWERY_ERRORS'
export const ADD_BREWERY_ERROR = 'ADD_BREWERY_ERROR'

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
    .then(brewery => dispatch(receiveBrewery(brewery)), err => (
        dispatch(receiveBreweryErrors(err.responseJSON))
      ))
)

export const receiveBreweryErrors = (errors) => ({
    type: RECEIVE_BREWERY_ERRORS,
    errors
});
  
  export const clearBreweryErrors = () => ({
    type: CLEAR_BREWERY_ERRORS,
  });

  export const addBreweryError = (error) => ({
    type: ADD_BREWERY_ERROR,
    error
  });