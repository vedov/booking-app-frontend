import React from "react";
import { useHistory, useLocation } from "react-router";
//import { useDispatch } from "react-redux";
import { register } from "./registerAction";
import useMediaQuery from "../../useMediaQuery";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import RegisterConstants from "../../constants/register";

const Register = () => {
  //const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const mobile = useMediaQuery("(max-width: 768px)");
  /* const [data, setData] = useState(
    location.pathname === "/register" && UserRegisterForm
  ); */

  return (
    <div className="register">
      {mobile && (
        <Button click={() => history.push("/")} variant="8">
          <i class="fa fa-chevron-left"></i>
        </Button>
      )}
      <div className="left">
        {!mobile && (
          <Button click={() => history.push("/")} variant="8">
            <i class="fa fa-chevron-left"></i>
            Back to home
          </Button>
        )}
        {/* <img src={data.image} alt=""></img> */}
      </div>
      <Form
        handleRegister={(userData) => {
          register({
            firstName: userData[0].value,
            lastName: userData[1].value,
            email: userData[2].value,
            password: userData[3].value,
          });
        }}
        data={RegisterConstants}
      ></Form>
    </div>
  );
};

export default Register;
