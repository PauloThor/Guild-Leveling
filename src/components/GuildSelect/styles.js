import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  background: var(--gradient-blue-dark);
  font-family: var(--font);

  img {
    margin: 10px;
    transition: 1s;

    &:hover {
      transform: translateY(-30px);
    }
  }

  h2,
  h3 {
    font-family: var(--font);
    text-transform: uppercase;
  }

  h2 {
    font-size: 3.5rem;
    width: 100%;
    padding: 2rem;
  }

  h3 {
    font-size: 3rem;
    padding: 7px;
  }
`;

export const GuildButton = styled.button`
  background: var(--gradient-brown-dark);
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 1.7rem;
  font-family: var(--font);
  width: 70%;

  &:hover {
    background: var(--gradient-blue-dark);
  }
`;

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  display: flex;
  justify-content: center;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 24%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "lightgray")};
  height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${(props) => (props.active ? "display: flex" : "display:none")};
  background: var(--gradient-blue-dark);
  margin: 12px;
  border-radius: 15px;
  /* justify-content: space-between; */
`;

export const GuildContainer = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const SecondGuildContainer = styled(GuildContainer)`
  border-right: 1px solid var(--dark);
`;

export const GuildTitle = styled.h3`
  font-family: var(--font);
  background: var(--gradient-brown-dark);
  color: white;
  margin: 5px;
  border-radius: 15px;
  padding: 10px;
`;

export const Col = styled.div`
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
  }
`;

export const CardContainer = styled.div`
  @keyframes leftToRight {
    from {
      transform: translateX(-50%);
    }

    to {
      transform: translateX(0);
    }
  }

  width: 400px;
  animation: 2s leftToRight ease;
  margin: 1rem;

  section {
    display: flex;
  }

  h3 {
    background: var(--gradient-brown-dark);
    border: 1px solid var(--brown);
    border-radius: 15px;
    font-size: 28px;
    width: 70%;
    margin: 0 auto;
  }

  img {
    cursor: pointer;
    width: 70%;
  }
`;

export const ModalContent = styled.div`
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

export const ContainerRanking = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
