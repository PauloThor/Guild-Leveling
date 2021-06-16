import { useEffect } from "react";
import QuestList from "../components/QuestList";
import { useInfoGuild } from "../provider/guild";

import GuildInfo from "../components/GuildInfo";
import ResumeUser from "../components/Profile";
const Dashboard = () => {
  const { updateMainGuilds } = useInfoGuild();
  const user = {
    username: "-teste1-",
    lvl: "1",
    experience: 200,
    guilds: ["Teste"],
    guildRank: "Knight",
    dailyQuests: ["Matar um boss", "Matar um"],
  };

  useEffect(() => {
    updateMainGuilds();
    // get quests
  }, []);

  return (
    <div>
      <QuestList />;
      <GuildInfo />
      <ResumeUser user={user} />
    </div>
  );
};

export default Dashboard;
