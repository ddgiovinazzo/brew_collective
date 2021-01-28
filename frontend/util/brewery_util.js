export const createBrewery = brewery => (
    $.ajax({
      method: 'POST',
      url: '/api/breweries',
      data: { brewery }
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