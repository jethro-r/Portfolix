import request from "superagent";

export const signUpApi = async (userInfo) => {
  return request
    .post("/api/users/register")
    .send(userInfo)
    .then((response) => {
      return response.body;
    });
};

export const loginApi = async (username, password) => {
  const loginInfo = {
    username: username,
    password: password,
  }
  return request
    .post("/api/users/login")
    .send(loginInfo)
    .then((response) => {
      return response.body;
    });
};
