import ResumeUser from "../components/ResumeUser";
import QuestList from "../components/QuestList";
import { useInfoUser } from "../provider/user";
import { Redirect } from "react-router";

const Dashboard = () => {
  const {
    infoUser: { authenticated },
  } = useInfoUser();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <QuestList />;
};

export default Dashboard;
