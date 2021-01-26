export const createBrewery = brewery => (
    $.ajax({
      method: 'POST',
      url: '/api/breweries',
      data: { brewery }
    })
);

export const fetchBreweries = () => (
    $.ajax({
        url: '/api/breweries',
    })
)