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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Header>
        <Nav>
          <Section>
            <Route exact path="/styleguide" component={Styleguide} />
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Section>
        </Nav>
      </Header>
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
