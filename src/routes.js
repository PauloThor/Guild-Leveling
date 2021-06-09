import { Switch, Route } from "react-router-dom";
import Burger from "./components/Navbar/Burger";
import Navbar from "./components/Navbar/Navbar";

const Routes = () => {
  return (
    <Switch>
      <Navbar />
      <Route exact path="/"></Route>
    </Switch>
  );
};

export default Routes;
