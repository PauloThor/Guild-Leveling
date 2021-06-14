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
  @keyframes leftToRight {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  width: 500px;
  animation: 2s leftToRight ease;
  margin: 1rem;

  section {
    display: flex;
  }

  h3 {
    background: var(--gradient-brown-dark);
    border: 1px solid var(--brown);
    border-radius: 15px;
  }

  img {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-brown-dark);
  padding: 1rem;
  font-family: var(--font);
  color: white;
  letter-spacing: 1px;
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  animation: 1s vanish;

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GuildCard = ({ id, name, description, access, members }) => {
  const [open, setOpen] = useState(false);

  const { joinGuild } = useInfoGuild();

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  const history = useHistory();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleJoin = () => {
    console.log(id);
    joinGuild(id, access);
    history.push("/login");
  };

  return (
    <>
      <CardContainer>
        <h3>{name}</h3>
        <img src={SelectedLogo[name]} alt={name} onClick={handleOpen} />
        <GuildButton onClick={handleJoin}>ENTER GUILD</GuildButton>
      </CardContainer>
      <Modal open={open} onClose={handleOpen}>
        <ModalContent>
          <p>Description: {description}</p>
          <p>Members quantity: {members}</p>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuildCard;
