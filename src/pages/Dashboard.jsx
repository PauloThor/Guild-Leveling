import { useEffect } from "react";
import QuestList from "../components/QuestList";
import { useInfoGuild } from "../provider/guild";
import { useInfoQuests } from "../provider/quests";
import styled from "styled-components";
import {
  GuildDetailsContainer,
  ProfileContainer,
} from "../components/StyledComponents";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";
import { useInfoUser } from "../provider/user";
import ResumeUser from "../components/Profile";

const Container = styled.div`
  background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
  min-height: 100vh;
  width: 100vw;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 100px 0 0 40px;
  margin: 0 auto;
  width: fit-content;

  section {
    /* width: 100%; */
  }

  @media (max-width: 768px) {
    section {
      width: 100%;
    }
  }
`;

const Dashboard = () => {
  const { updateMainGuilds } = useInfoGuild();
  const { infoQuests, getQuests } = useInfoQuests();
  const { updateStatus, infoUser } = useInfoUser();

  useEffect(() => {
    updateMainGuilds();
    getQuests();
  }, []);

  useEffect(() => {
    updateStatus(infoQuests);
  }, [infoQuests]);

  return (
    <Container>
      <Header>
        <Nav>
          <DashboardContainer>
            <section>
              <QuestList />
            </section>
            <section>
              <ProfileContainer />

              <GuildDetailsContainer />
            </section>
          </DashboardContainer>
        </Nav>
      </Header>
      <ResumeUser user={infoUser} />
    </Container>
  );
};

export default Dashboard;
