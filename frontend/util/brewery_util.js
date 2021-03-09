export const createBrewery = (brewery, beer) => (
    $.ajax({
      method: 'POST',
      url: '/api/beers/brewery',
      data: { brewery, beer }
    })
);

export const fetchAllBreweries = () => (
    $.ajax({
        url: '/api/breweries',
    })
)

export const fetchBrewery = (breweryId) => (
    $.ajax({
        url: `/api/breweries/${breweryId}`
    })
)