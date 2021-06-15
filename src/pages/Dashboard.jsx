import QuestList from "../components/QuestList";
import GuildInfo from "../components/GuildInfo";
const Dashboard = () => {
  // const {
  //   infoUser: { authenticated },
  // } = useInfoUser();

  // if (!authenticated) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div>
      <QuestList />;
      <GuildInfo />
    </div>
  );
};

export default Dashboard;
