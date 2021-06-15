import { Container } from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useEffect } from "react";
import { useInfoUser } from "../../provider/user";
import { starterGuilds } from "../../database";
import GuildCard from "./GuildCard";

import Logo from "../../assets/logo.png";
import LogoGray from "../../assets/logo-gray.png";
import LogoWhite from "../../assets/logo-red.png";

const GuildSelect = () => {
  const { searchGuilds, infoGuilds } = useInfoGuild();
  const {
    infoUser: { access },
  } = useInfoUser();

  useEffect(() => {
    searchGuilds("leveling");
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2>Which guild do you choose?</h2>
      {infoGuilds
        .filter((guild) => starterGuilds.includes(guild.name))
        .map((guild) => (
          <div key={guild.id}>
            <GuildCard
              name={guild.name}
              id={guild.id}
              access={access}
              description={guild.description}
              members={guild.users_on_group.length}
            />
          </div>
        ))}
      <img src={Logo} alt="logo" />
      <img src={LogoGray} alt="logo" />
      <img src={LogoWhite} alt="logo" />
    </Container>
  );
};

export default GuildSelect;
