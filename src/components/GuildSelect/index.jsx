import { Container } from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useHistory } from "react-router-dom";

const GuildSelect = () => {
  const { searchGroup, infoGuilds } = useInfoGuild();
  searchGroup("gl-teste");
  const history = useHistory();

  return (
    <Container>
      {infoGuilds.map((guild) => (
        <div>
          <span>{guild.name}</span>
          <span>{guild.description}</span>
          <span>{guild.categoty}</span>
        </div>
      ))}
    </Container>
  );
};

export default GuildSelect;
