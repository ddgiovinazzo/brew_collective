export const createAward = (award) => (
  $.ajax({
    method: 'POST',
    url: '/api/awards',
    data: { award }
  })
);

export const deleteAward = (awardId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/awards/${awardId}`,
  })
);