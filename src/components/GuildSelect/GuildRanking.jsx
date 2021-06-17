import {
  Content,
  Tabs,
  Tab,
  GuildContainer,
  GuildTitle,
  SecondGuildContainer,
} from "./styles";
import { useInfoGuild } from "../../provider/guild";
import Guild1Logo from "../../assets/guild1.png";
import { useEffect, useState } from "react";
import { ContainerRanking } from "./styles";

const GuildRanking = () => {
  const { updateMainGuilds, mainGuilds } = useInfoGuild();
  const [active, setActive] = useState("Scavenger Guild");
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
    handleUpdate();
  };

  useEffect(() => {
    handleUpdate();
    // eslint-disable-next-line
  }, []);

  const handleUpdate = () => {
    updateMainGuilds();
  };

  return (
    <ContainerRanking>
      {/* {sortedByName.length > 0 &&
        value === "name" &&
        sortedByName.map((guild) => <p>{guild?.name}</p>)}
      {value === "members" &&
        sortedByMembers.map((guild) => <p>{guild?.name}</p>)} */}
      <Tabs>
        <Tab onClick={(e) => handleClick(e)} active={active === 0} id={0}>
          Scavenger Guild
        </Tab>
        <Tab onClick={(e) => handleClick(e)} active={active === 1} id={1}>
          Hunters Guild
        </Tab>
        <Tab onClick={(e) => handleClick(e)} active={active === 2} id={2}>
          Fame Guild
        </Tab>
        <Tab onClick={(e) => handleClick(e)} active={active === 3} id={3}>
          Ahjin Guild
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <GuildContainer>
            <div>
              <h3>
                Guild Master: {mainGuilds["Scavenger Guild"]?.creator.username}
              </h3>
              <h3>Members</h3>
              {mainGuilds["Scavenger Guild"]?.users_on_group?.map((player) => (
                <GuildTitle>{player?.username}</GuildTitle>
              ))}
            </div>
          </GuildContainer>
          <SecondGuildContainer>
            <img src={Guild1Logo} alt="scavenger" />
          </SecondGuildContainer>
        </Content>
        <Content active={active === 1}>Content2</Content>
        <Content active={active === 2}>Content3</Content>
        <Content active={active === 3}>Content4</Content>
      </>
    </ContainerRanking>
  );
};

export default GuildRanking;
