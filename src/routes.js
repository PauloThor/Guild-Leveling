import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Styleguide from "./Styleguide";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Signup />
      </Route>
      <Route exact path="/login">
        <Navbar />
        <Login />
      </Route>
      <Route exact path="/styleguide" component={Styleguide} />
    </Switch>
  );
};

export default Routes;
