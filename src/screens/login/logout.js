import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "./loginAction";
const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(logout());
    history.push("/");
  });
  return null;
};

export default Logout;
