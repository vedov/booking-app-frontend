import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./screens/landingPage/landingPage";
import Login from "./screens/login/login";
import Register from "./screens/register/register";
import "./main-style.css";
import Property from "./screens/property/property";
import Logout from "./screens/login/logout";
import UserDashboard from "./screens/user/user-dashboard/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/property/:id" component={Property} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
