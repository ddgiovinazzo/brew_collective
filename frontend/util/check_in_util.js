export const fetchCheckIns = beer_id => {
    return $.ajax({
      url: `/api/check_ins/search/${beer_id}`,
    })
  };

export const createCheckIn = check_in => {
    return $.ajax({
      method: 'POST',
      url: '/api/check_ins',
      data: {check_in}
    })
  };