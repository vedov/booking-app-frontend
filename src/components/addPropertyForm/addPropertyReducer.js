import {
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_REQUEST,
  ADD_PROPERTY_SUCCESS,
} from "./addPropertyConstant";

export const addPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROPERTY_REQUEST:
      return { loading: true };

    case ADD_PROPERTY_SUCCESS:
      return { loading: false, propertyInfo: action.payload };

    case ADD_PROPERTY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
