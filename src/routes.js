import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import GuildSelect from "./pages/GuildSelect";

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
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/guildselect">
        <GuildSelect />
      </Route>
    </Switch>
  );
};

export default Routes;
