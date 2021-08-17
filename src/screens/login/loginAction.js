import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./loginConstants";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/user/login",
        { email, password },
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT });
};
