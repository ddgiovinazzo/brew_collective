export const fetchAllUsers = () => {
  return $.ajax({
    url: `/api/users/`,
  })
};
export const fetchUser = (userId) => (
    $.ajax({
      url: `/api/users/${userId}`,
    })
);
export const updateUser = (user) => {
  return   $.ajax({
      method: "PATCH",
      url: `/api/users/${user.get("user[id]")}`,
      data: user,
      contentType: false,
      processData: false
    })
  };