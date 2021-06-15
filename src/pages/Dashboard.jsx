import { useEffect } from "react";
import QuestList from "../components/QuestList";
import { useInfoGuild } from "../provider/guild";

const Dashboard = () => {
  const { updateMainGuilds } = useInfoGuild();

  useEffect(() => {
    updateMainGuilds();
    // get quests
  }, []);

  return (
    <div>
      <QuestList />
    </div>
  );
};

export default Dashboard;
