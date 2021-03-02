export const createCheckIn = checkIn => (
    $.ajax({
      method: 'POST',
      url: '/api/check_ins',
      data: {checkIn}
    })
);