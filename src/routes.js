import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Styleguide from "./Styleguide";
import Dashboard from "./pages/Dashboard";
import GuildSelect from "./pages/GuildSelect";
import GuildDashboard from "./pages/GuildDashboard";
import Header from "./components/Header";
import Nav from "./components/Navigation/Nav";
import Section from "./components/Section";
import PageNotFound from "./pages/PageNotFound";
import Shop from "./components/Shop";
import TutorialPage from "./pages/TutorialPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/guildselect">
        <GuildSelect />
      </Route>
      <Route path="/guildboard">
        <GuildDashboard />
      </Route>
      <Route exact path="/styleguide" component={Styleguide} />
      <Route exact path="/dashboard">
        {/* <Header> */}
        {/* <Nav> */}
        <Dashboard />
        {/* </Nav> */}
        {/* </Header> */}
      </Route>
      <Route exact path="/tutorial">
        <TutorialPage/>
      </Route>
      <Route exact path="/shop" component={Shop} />
      <Route path={"*"} component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
