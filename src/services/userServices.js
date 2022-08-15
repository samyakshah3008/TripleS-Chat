import axios from "axios";

export const followUserService = (followUserId, token) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const unfollowUserService = (followUserId, token) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
