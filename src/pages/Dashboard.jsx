import ResumeUser from "../components/ResumeUser";
import QuestList from "../components/QuestList";
import { useInfoUser } from "../provider/user";
import { Redirect } from "react-router";
import { useInfoQuests } from "../provider/quests";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    infoUser: { authenticated },
    getExp,
  } = useInfoUser();
  const { infoQuests } = useInfoQuests();

  useEffect(() => {
    getExp(infoQuests);
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <QuestList />;
};

export default Dashboard;
