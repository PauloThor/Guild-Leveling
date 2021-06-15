import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Styleguide from "./Styleguide";
import Dashboard from "./pages/Dashboard";
import GuildSelect from "./pages/GuildSelect";
import GuildDashboard from "./pages/GuildDashboard";

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
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/guildselect">
        <GuildSelect />
      </Route>
      <Route path="/guildboard">
        <GuildDashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
