
export const createBeer = beer => (
    $.ajax({
      method: 'POST',
      url: '/api/beers',
      data: { beer }
    })
);

export const fetchAllBeers = () => (
    $.ajax({
      url: '/api/beers',
    })
);