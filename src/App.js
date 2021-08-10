import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./screens/landingPage/landingPage";
import Login from "./screens/login/login";
import Register from "./screens/register/register";
import "./main-style.css";
import Property from "./screens/property/property";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/property/:id" component={Property} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
