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
  background: var(--gradient-blue-dark);
  width: 280px;
  min-height: 280px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px auto;
  position: relative;
  animation: vanish 1s;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  img {
    width: 100px;
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
    margin: 15px auto;
    justify-content: space-between;

    img {
      height: 250px;
      width: 180px;
    }
  }

  @media (min-width: 1200px) {
    margin: 15px 0.5rem;
  }
`;

export const Container = styled.div`
  background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
  min-height: 100vh;
  width: 100vw;
`;
