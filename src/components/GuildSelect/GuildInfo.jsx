import { GuildDetailsContainer } from "../StyledComponents";
import { useInfoGuild } from "../../provider/guild";
import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import { Col } from "./styles";
import { useEffect } from "react";

const GuildInfo = () => {
  const { infoGuild, getUserGuilds } = useInfoGuild();
  const { name, creator, users_on_group } = infoGuild;

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  useEffect(() => {
    getUserGuilds();
    console.log(infoGuild);
  }, []);

  return (
    <>
      <GuildDetailsContainer>
        <Col>
          <h3>{name}</h3>
          <p>
            Guild Master: <label>{creator?.username}</label>
          </p>
          <p>Members: {users_on_group?.length}</p>
        </Col>
        <Col>
          <img src={SelectedLogo[name]} alt={name} />
        </Col>
      </GuildDetailsContainer>
    </>
  );
};

export default GuildInfo;
