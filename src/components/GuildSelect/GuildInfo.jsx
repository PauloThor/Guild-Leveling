import styled from "styled-components";
import { useInfoGuild } from "../../provider/guild";

import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import { Modal } from "@material-ui/core";
import { useState } from "react";
import { GuildButton } from "./styles";
import { useHistory } from "react-router-dom";

const CardContainer = styled.div`
  width: 100%;
  margin: 1rem;

  h3 {
    background: var(--gradient-brown-dark);
    border: 1px solid var(--brown);
    border-radius: 15px;
  }
`;

const GuildInfo = ({ id, name, description, access, members, creator }) => {
  const { joinGuild } = useInfoGuild();

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  const history = useHistory();

  const handleJoin = () => {
    console.log(id);
    joinGuild(id, access);
    history.push("/login");
  };

  return (
    <>
      <CardContainer>
        <h3>Guild Master: {creator}</h3>
        <img src={SelectedLogo[name]} alt={name} />
        <GuildButton onClick={handleJoin}>ENTER GUILD</GuildButton>
      </CardContainer>
    </>
  );
};

export default GuildInfo;
