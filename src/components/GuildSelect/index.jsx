import { Container } from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useInfoUser } from "../../provider/user";

const GuildSelect = () => {
  const { searchGuilds, infoGuilds, joinGuild, createGuild } = useInfoGuild();
  const {
    infoUser: { access },
  } = useInfoUser();

  const history = useHistory();
  useEffect(() => {
    searchGuilds("gl-teste");
  }, []);

  const selectedGuild = (id) => {
    joinGuild(id, access);
  };

  return (
    <Container>
      {infoGuilds.map((guild) => (
        <div key={guild.id}>
          <span>{guild.name}</span>
          {/* <span>{guild.description}</span>
          <span>{guild.categoty}</span> */}
          <button onClick={() => selectedGuild(guild.id)}>Entrar</button>
        </div>
      ))}
      <button onClick={createGuild}>create</button>
    </Container>
  );
};

export default GuildSelect;
