export const fetchUsers = user_ids => {
  return $.ajax({
    url: `/api/users/search/${user_ids}`,
  })
};
export const fetchUser = (userId) => (
    $.ajax({
      url: `/api/users/${userId}`,
    })
);