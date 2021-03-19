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
export const updateUserPhoto = (user) => {
  return   $.ajax({
      method: "PATCH",
      url: `/api/users/photo/${user.id}`,
      data: user,
      contentType: false,
      processData: false
    })
  };
  
export const updateUser = (user) => {
  return   $.ajax({
      method: "PATCH",
      url: `/api/users/${user.id}`,
      data: {user},
    })
  };