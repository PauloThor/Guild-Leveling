import QuestList from "../components/QuestList";

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
    </div>
  );
};

export default Dashboard;
