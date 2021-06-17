import styled from "styled-components";
import GuildRanking from "../components/GuildSelect/GuildRanking";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";

const Container = styled.div`
  background: var(--gradient-purple-dark);
  min-height: 100vh;
  width: 100vw;
  padding: 25px 0;
`;

const GuildDashboard = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <GuildRanking />
        </Nav>
      </Header>
    </Container>
  );
};

export default GuildDashboard;
