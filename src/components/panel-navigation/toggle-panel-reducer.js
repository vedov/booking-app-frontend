import { PANEL_SHOW, PANEL_HIDE } from "./toggle-panel-constants";
export const togglePanelReducer = (state ={show:true}, action) => {
    switch (action.type) {
      case PANEL_SHOW:
        return { show: true };
  
      case PANEL_HIDE:
        return { show: false };
  
        default:
        return state;
    }
  };
  