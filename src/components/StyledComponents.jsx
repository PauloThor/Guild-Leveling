import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: var(--gradient-brown-dark);
  width: 320px;
  min-height: 500px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px auto;
  position: relative;
  animation: vanish 1s;

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 780px) {
    width: 520px;
    margin: 0.5rem;
  }
`;

export const GuildDetailsContainer = styled.div`
  background: var(--gradient-brown-dark);
  width: 320px;
  min-height: 280px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px auto;
  position: relative;
  animation: vanish 1s;

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 780px) {
    width: 520px;
    margin: 0.5rem;
  }
`;
