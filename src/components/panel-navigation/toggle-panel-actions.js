import { PANEL_SHOW, PANEL_HIDE } from "./toggle-panel-constants";

export const Toggle = (currentValue) => async (dispatch) => {
  if (currentValue === true) {
    dispatch({ type: PANEL_HIDE });
  } else if (currentValue === false) {
    dispatch({ type: PANEL_SHOW });
  }
};
