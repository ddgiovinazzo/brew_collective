export const fetchCheckIns = user_ids => {
    return $.ajax({
      url: `/api/check_ins/search/${user_ids}`
    })
  };

export const createCheckIn = check_in => {
    return $.ajax({
      method: 'POST',
      url: '/api/check_ins',
      data: {check_in}
    })
  };