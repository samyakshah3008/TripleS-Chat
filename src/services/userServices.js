import axios from "axios";

export const followUserService = (followUserId, token) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
