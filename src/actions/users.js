import request from "superagent";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const baseUrl = "http://localhost:4000";

function signupSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload
  };
}

function signupError(payload) {
  return {
    type: SIGNUP_ERROR,
    payload
  };
}

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

function loginError(payload) {
  return {
    type: LOGIN_ERROR,
    payload
  };
}

export const signup = (name, email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ name, email, password })
    .then(response => {
      const action = signupSuccess(response.body);
      dispatch(action);
    })
    .catch(err => {
      console.error(err);
      console.log("URL SILLY", err.response);
      dispatch(
        signupError({
          // url: err.response.req.url,
          message: err.response.body.message
        })
      );
    });
};

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("NAME", response.body);
      const action = loginSuccess(response.body);

      // Save login data to local storage to persist the login state
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("jwt", action.payload.jwt);

      dispatch(action);

      // Remove expired JWT in 2 hours
      setTimeout(logout, 7200000);
    })
    .catch(err => {
      console.error(err);
      dispatch(
        loginError({
          url: err.response.url,
          message: err.response.body.message
        })
      );
    });
};

export const logout = () => dispatch => {
  // Remove data from localStorage
  localStorage.clear();

  dispatch({
    type: LOGOUT_SUCCESS,
    payload: {}
  });
};
