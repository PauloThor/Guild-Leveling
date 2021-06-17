/* eslint-disable react-hooks/exhaustive-deps */
import {
  Content,
  Tabs,
  Tab,
  GuildContainer,
  GuildTitle,
  SecondGuildContainer,
} from "./styles";
import styled from "styled-components";
import { useInfoGuild } from "../../provider/guild";
import { useEffect, useState } from "react";

import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";

const Container = styled.div`
  background-image: var(--gradient-blue-dark);
  min-height: 80vh;
  width: 80vw;
  margin: 79px auto;
  border-radius: 15px;
  margin-left: 60px;
  @media (min-width: 750px) {
    margin-left: 5.8rem;
  }
  @media (min-width: 1024px) {
    margin-left: 8.1rem;
  }
`;

const GuildRanking = () => {
  const { updateMainGuilds, mainGuilds } = useInfoGuild();

  const [active, setActive] = useState("Scavenger Guild");
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  useEffect(() => {
    if (mainGuilds["Scavenger Guild"]?.id === undefined) updateMainGuilds();
  }, [mainGuilds]);

  return (
    <>
      {mainGuilds["Scavenger Guild"]?.id === 528 && (
        <Container>
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
                  <h3 className="gm">Guild Master: </h3>
                  <label>
                    {mainGuilds["Scavenger Guild"]?.creator.username}
                  </label>
                  <h3>Members</h3>
                  {mainGuilds["Scavenger Guild"]?.users_on_group?.map(
                    (player) => (
                      <GuildTitle>{player?.username}</GuildTitle>
                    )
                  )}
                </div>
              </GuildContainer>
              <SecondGuildContainer>
                <img src={Guild1Logo} alt="scavenger" />
              </SecondGuildContainer>
            </Content>
            <Content active={active === 1}>
              <GuildContainer>
                <div>
                  <h3 className="gm">Guild Master: </h3>
                  <label>{mainGuilds["Hunters Guild"]?.creator.username}</label>
                  <h3>Members</h3>
                  {mainGuilds["Hunters Guild"]?.users_on_group?.map(
                    (player) => (
                      <GuildTitle>{player?.username}</GuildTitle>
                    )
                  )}
                </div>
              </GuildContainer>
              <SecondGuildContainer>
                <img src={Guild2Logo} alt="hunter" />
              </SecondGuildContainer>
            </Content>
            <Content active={active === 2}>
              <GuildContainer>
                <div>
                  <h3 className="gm">Guild Master: </h3>
                  <label>{mainGuilds["Fame Guild"]?.creator.username}</label>
                  <h3>Members</h3>
                  {mainGuilds["Fame Guild"]?.users_on_group?.map((player) => (
                    <GuildTitle>{player?.username}</GuildTitle>
                  ))}
                </div>
              </GuildContainer>
              <SecondGuildContainer>
                <img src={Guild3Logo} alt="fame" />
              </SecondGuildContainer>
            </Content>
            <Content active={active === 3}>
              <GuildContainer>
                <div>
                  <h3 className="gm">Guild Master: </h3>
                  <label>{mainGuilds["Ahjin Guild"]?.creator.username}</label>
                  <h3>Members</h3>
                  {mainGuilds["Ahjin Guild"]?.users_on_group?.map((player) => (
                    <GuildTitle>{player?.username}</GuildTitle>
                  ))}
                </div>
              </GuildContainer>
              <SecondGuildContainer>
                <img src={Guild4Logo} alt="ahjin" />
              </SecondGuildContainer>
            </Content>
          </>
        </Container>
      )}
    </>
  );
};

export default GuildRanking;
