import { Container } from "./styles";
import QuestsCard from "./QuestsCard";
import PersonIcon from "@material-ui/icons/Person";
import ExperienceBar from "../ExperienceBar";
import { useInfoUser } from "../../provider/user";

const ResumeUser = ({ user }) => {
  const { infoUser } = useInfoUser();
  console.log(infoUser);

  return (
    <Container>
      <div className="user-profile">
        <PersonIcon />
        <div className="info">
          <span>
            Name: {infoUser.username} Level: {infoUser.lvl}
          </span>
          <span>Role: {user.guildRank}</span>
          <span>Cash: $20</span>
          <ExperienceBar experience={infoUser.exp} />
        </div>
      </div>

      <div className="quests-container">
        <h1>Recents Quests</h1>
        <QuestsCard />
      </div>
    </Container>
  );
};

export default ResumeUser;
