import GuildRanking from "./components/GuildSelect/GuildRanking";
import Quest from "./components/Quest";
import { DataQuests } from "./database";
import { useInfoUser } from "./provider/user";

const Styleguide = () => {
  const { infoUser } = useInfoUser();

  return (
    <div>
      {/* {DataQuests.A.map((quest, i) => (
        <Quest name={quest.title} rank={quest.difficulty} />
      ))} */}
      <p>{infoUser.exp}</p>
      <GuildRanking />
    </div>
  );
};

export default Styleguide;

// criar um provider para o display da quests
