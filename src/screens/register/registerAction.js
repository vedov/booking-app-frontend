import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./registerConstant";
export const register =
  ({ firstName, lastName, email, password, role }) =>
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
        process.env.REACT_APP_BACKEND_URL + "/api/register",
        {
          firstName,
          lastName,
          email,
          password,
          role,
        },
        config
      );

      // localStorage.setItem("token", data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });

      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: data,
      // });
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
