import axios from "axios";
import {
  ADD_PROPERTY_REQUEST,
  ADD_PROPERTY_SUCCESS,
  ADD_PROPERTY_FAIL,
} from "./addPropertyConstant";
export const addProperty =
  ({ name }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_PROPERTY_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/property/create-new?secret_token=` +
          localStorage.getItem("token"),
        {
          name,
        },
        config
      );
      dispatch({
        type: ADD_PROPERTY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PROPERTY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
