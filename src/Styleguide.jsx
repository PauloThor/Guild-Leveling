import Quest from "./components/Quest";
import { DataQuests } from "./database";

const Styleguide = () => {
  // const dRank = DataQuests.filter((e) => e === "D");

  return (
    <div>
      {DataQuests.A.map((quest, i) => (
        <Quest name={quest.title} rank={quest.difficulty} />
      ))}
    </div>
  );
};

export default Styleguide;
