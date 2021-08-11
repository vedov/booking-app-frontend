import { combineReducers } from "redux";
import { registerReducer } from "../screens/register/registerReducer";
import { loginReducer } from "../screens/login/loginReducer";
import { addPropertyReducer } from "../components/addPropertyForm/addPropertyReducer";
//import { userReducer } from "../screens/administration/doctor/doctor-dashboard/userReducer"
import { togglePanelReducer } from "../components/panel-navigation/toggle-panel-reducer";

const Reducers = combineReducers({
  togglePanel: togglePanelReducer,
  register: registerReducer,
  login: loginReducer,
  addProperty: addPropertyReducer,
  //users: userReducer
});
export default Reducers;
