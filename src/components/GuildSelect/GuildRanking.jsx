import {
  Container,
  Content,
  Tabs,
  Tab,
  GuildContainer,
  GuildTitle,
  SecondGuildContainer,
} from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useEffect, useState } from "react";
import { useInfoUser } from "../../provider/user";
import { starterGuilds } from "../../database";
import GuildCard from "./GuildCard";

import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import GuildInfo from "./GuildInfo";

const GuildRanking = () => {
  const { searchGuilds, infoGuilds, updateMainGuilds, mainGuilds } =
    useInfoGuild();
  const {
    infoUser: { access },
  } = useInfoUser();
  const [sortedGuilds, setSortedGuilds] = useState(mainGuilds);
  const [sortedByName, setSortedByName] = useState([]);
  const [sortedByMembers, setSortedByMembers] = useState([]);
  const [value, setValue] = useState("name");
  const [active, setActive] = useState("Scavenger Guild");
  const handleClick = (name) => {
    // const index = parseInt(e.target.id, 0);
    if (name !== active) {
      setActive(name);
    }
    handleUpdate();
    console.log(name);
  };

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    handleUpdate();
    // eslint-disable-next-line
  }, []);

  const handleUpdate = () => {
    updateMainGuilds();
    setSortedGuilds([
      mainGuilds["Hunters Guild"],
      mainGuilds["Scavenger Guild"],
      mainGuilds["Fame Guild"],
      mainGuilds["Ahjin Guild"],
    ]);
  };

  const sortByMembers = () => {
    handleUpdate();
    if (sortedGuilds.length === 0) {
      return;
    }

    const newSort = sortedGuilds.sort(
      (a, b) => b.users_on_group.length - a.users_on_group.length
    );
    setSortedByMembers(newSort);
    setValue("members");
  };

  const sortByName = () => {
    handleUpdate();
    if (sortedGuilds.length === 0) {
      return;
    }

    const newSort = sortedGuilds.sort((a, b) => a.name[0] - b.name[0]);
    setSortedByName(newSort);
    setValue("name");
  };

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <div>
        <button onClick={sortByName}>Sortear por nome</button>
        <button onClick={sortByMembers}>Sortear por membros</button>
      </div>
      {sortedByName.length > 0 &&
        value === "name" &&
        sortedByName.map((guild) => <p>{guild?.name}</p>)}
      {value === "members" &&
        sortedByMembers.map((guild) => <p>{guild?.name}</p>)}
      <Tabs>
        <Tab
          onClick={() => handleClick("Scavenger Guild")}
          active={active === "Scavenger Guild"}
          id={0}
        >
          Scavenger Guild
        </Tab>
        <Tab
          onClick={() => handleClick("Hunters Guild")}
          active={active === "Hunters Guild"}
          id={1}
        >
          Hunters Guild
        </Tab>
        <Tab
          onClick={() => handleClick("Fame Guild")}
          active={active === "Fame Guild"}
          id={2}
        >
          Fame Guild
        </Tab>
        <Tab
          onClick={() => handleClick("Ahjin Guild")}
          active={active === "Ahjin Guild"}
          id={3}
        >
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

        {sortedGuilds.length > 0 &&
          sortedGuilds?.map((guild) => (
            <Content active={active === guild.name}>
              <GuildInfo
                name={guild.name}
                id={guild.id}
                creator={guild.creator}
                members={guild.users_on_group}
                description={guild.description}
              />
            </Content>
          ))}
        {/* <Content active={active === mainGuilds[0].name}>Teste</Content> */}
      </>
    </div>
  );
};

export default GuildRanking;
