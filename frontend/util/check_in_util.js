export const createCheckIn = check_in => {
    return $.ajax({
      method: 'POST',
      url: '/api/check_ins',
      data: {check_in}
    })
  };