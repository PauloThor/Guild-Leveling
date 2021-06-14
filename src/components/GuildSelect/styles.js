import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
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
    padding-top: 8px;
  }
`;

export const GuildButton = styled.button`
  background: var(--gradient-brown-dark);
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 2rem;
  font-family: var(--font);
  /* border: 1px solid var(--brown); */

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
