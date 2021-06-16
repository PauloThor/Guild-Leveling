import styled from "styled-components";
import Header from "../Header";
import Nav from "../Navigation/Nav";
import { Button } from "@material-ui/core";

import Expansion1 from "../../assets/expansion1.png";
import Expansion2 from "../../assets/expansion2.png";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--gradient-purple-dark);
  padding-top: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  flex-wrap: wrap;
`;

const ExpansionCard = styled.div`
  background: var(--gradient-blue-dark);
  padding: 1rem;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  font-family: var(--font);
  border: 1px solid var(--brown);
  margin: 1rem;

  p {
    background: var(--gradient-brown-dark);
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-family: var(--font);
    font-size: 1.2rem;
    border: 1px solid var(--brown);

    label {
      color: lightgreen;
      font-family: var(--font);
    }
  }

  img {
    width: 300px;
  }

  button {
    background: var(--gradient-brown-dark);
    width: 180px;
    height: 50px;
    color: lightgreen;
    border-radius: 10px;
    border: 1px solid var(--brown);
    font-family: var(--font);

    &:hover {
      background: var(--gradient-blue-dark);
    }
  }
`;

const Shop = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Content>
            <ExpansionCard>
              <p>Shadows of the Realm</p>
              <img src={Expansion1} alt="expansion" />
              <p>
                Price:
                <label> $499</label>
              </p>
              <Button variant="contained">BUY</Button>
            </ExpansionCard>
            <ExpansionCard>
              <p>The Last King</p>
              <img src={Expansion2} alt="expansion" />
              <p>
                Price:
                <label> $399</label>
              </p>
              <Button variant="contained">BUY</Button>
            </ExpansionCard>
          </Content>
        </Nav>
      </Header>
    </Container>
  );
};

export default Shop;
