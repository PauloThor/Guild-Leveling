import { useState } from "react";
import GuildRanking from "./components/GuildSelect/GuildRanking";
import Quest from "./components/Quest";
import { DataQuests } from "./database";
import { useInfoGuild } from "./provider/guild";
import { useInfoUser } from "./provider/user";

const Styleguide = () => {
  const [show, setShow] = useState(false);
  const { infoUser } = useInfoUser();
  const { updateMainGuilds } = useInfoGuild();

  const handleShow = () => {
    setShow(!show);
    updateMainGuilds();
  };

  return (
    <div>
      {/* {DataQuests.A.map((quest, i) => (
        <Quest name={quest.title} rank={quest.difficulty} />
      ))} */}
      <button onClick={updateMainGuilds}>Atualizar</button>
      <button onClick={handleShow}>Mostrar</button>
      {show && <GuildRanking />}
    </div>
  );
};

export default Styleguide;

// criar um provider para o display da quests
