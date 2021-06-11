import Quest from "./components/Quest";
import { DataQuests } from "./database";
import { useInfoQuests } from "./provider/quests";
import { useInfoUser } from "./provider/user";

const Styleguide = () => {
  const { infoQuests, addQuest, removeQuest } = useInfoQuests();
  const { getExp, infoUser } = useInfoUser();

  return (
    <div>
      {DataQuests.S.map((quest, i) => (
        <Quest name={quest.title} rank={quest.difficulty} />
      ))}
      <p>{infoUser.exp}</p>
    </div>
  );
};

export default Styleguide;

// criar um provider para o display da quests
