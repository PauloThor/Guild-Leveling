import { useInfoQuests } from "../../provider/quests";

const QuestsCard = () => {
  const { infoQuests } = useInfoQuests();

  return (
    <ul>
      {infoQuests.slice(-4).map((quest, index) => {
        return (
          <div className="quest">
            <li key={index}>
              <h3>{quest.title}</h3>
              <span>Rank: {quest.difficulty}</span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default QuestsCard;
