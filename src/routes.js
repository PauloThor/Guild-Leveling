import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Signup />
      </Route>
      <Route path="/login">
        <Navbar />
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
