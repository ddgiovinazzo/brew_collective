export const fetchAllBadges = () => {
  return $.ajax({
    url: `/api/badges/`,
  })
};