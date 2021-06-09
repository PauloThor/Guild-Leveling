import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
      </Route>
    </Switch>
  );
};

export default Routes;
