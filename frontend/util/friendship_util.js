export const createFriendship = (friendship) => (
  $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { friendship }
  })
);

export const updateFriendship = (friendship) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${friendship.id}`,
    data: { friendship }
  })
);

export const deleteFriendship = (friendshipId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendshipId}`,
  })
);