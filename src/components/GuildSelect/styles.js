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
  background: transparent;
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
  padding: 0;
  border-radius: 5px;
  position: relative;
  font-family: var(--font);
  background: var(--gradient-brown-dark);
  color: #fff;

  margin-right: 0.1em;
  font-size: 0.9em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
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
  font-family: var(--font);
  color: var(--white);
  h3 {
    font-family: var(--font);
    margin-left: 130px;
    @media (min-width: 780px) {
      margin-left: 90.6px;
      width: 21.5rem;
    }
  }
  .gma {
    margin-bottom: 85px;
    max-width: 150px;
    background: var(--gradient-brown-dark);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid var(--brown);
    font-family: var(--font);
    font-size: 1.2rem;
    margin: 0.5rem 0;
    @media (min-width: 780px) {
      max-width: initial;
      display: inline;
    }
  }

  label {
    font-family: var(--font);
    color: orange;
    display: inline-block;
    margin-bottom: 100px;
    margin-left: 130px;
    font-weight: 700;
  }
  p {
    font-family: var(--font);
    color: var(--white);
  }
`;

export const SecondGuildContainer = styled(GuildContainer)`
  border-right: 1px solid var(--dark);

  img {
    max-height: 100px;
    min-height: 9rem;
    @media (min-width: 650px) {
      max-height: 250px;
    }
    @media (min-width: 860px) {
      max-height: 400px;
    }
  }
`;

export const GuildTitle = styled.h4`
  background: radial-gradient(circle, #5a40548c 20%, #050303a3 118%);
  color: var(--white);
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
  width: 15.1rem;
  font-family: var(--font);
  margin-left: 130px;
  @media (min-width: 780px) {
    margin-left: 90.6px;
    width: 21.5rem;
  }
`;
