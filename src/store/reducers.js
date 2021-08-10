import { combineReducers } from "redux";
import { registerReducer } from "../screens/register/registerReducer";
import { loginReducer } from "../screens/login/loginReducer";
//import { userReducer } from "../screens/administration/doctor/doctor-dashboard/userReducer"
//import { togglePanelReducer } from "../components/panel-navigation/toggle-panel-reducer";

const Reducers = combineReducers({
  //togglePanel: togglePanelReducer,
  register: registerReducer,
  login: loginReducer,
  //users: userReducer
});
export default Reducers;
