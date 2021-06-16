import styled from "styled-components";
import { useInfoGuild } from "../../provider/guild";

import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import { Button, Modal } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { GuildDetailsContainer } from "../StyledComponents";
import { useInfoUser } from "../../provider/user";
import { useEffect } from "react";

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: var(--font);
  padding: 0 5px;

  p,
  h3 {
    background: var(--gradient-brown-dark);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid var(--brown);
    font-family: var(--font);
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  label {
    color: orange;
    font-family: var(--font);
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.3rem;
    background: var(--gradient-purple-dark);
    border-color: var(--purple);
  }
`;

const GuildInfo = () => {
  const { joinGuild, infoGuild, getUserGuilds } = useInfoGuild();
  const { id, name, creator, users_on_group } = infoGuild;

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  const history = useHistory();

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
