import { useEffect } from "react";
import QuestList from "../components/QuestList";
import { useInfoGuild } from "../provider/guild";

import GuildInfo from "../components/GuildInfo";
const Dashboard = () => {
  const { updateMainGuilds } = useInfoGuild();

  useEffect(() => {
    updateMainGuilds();
    // get quests
  }, []);

  return (
    <div>
      <QuestList />;
      <GuildInfo />
    </div>
  );
};

export default Dashboard;
