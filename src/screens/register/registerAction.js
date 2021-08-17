import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./registerConstant";
export const register =
  ({ fullName, email, password, password2 }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/user/register",
        {
          fullName,
          email,
          password,
          password2,
        },
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
