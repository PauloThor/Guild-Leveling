import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./styles/global";

const Routes = () => {
  return (
    <Switch>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/"></Route>
    </Switch>
  );
};

export default Routes;
