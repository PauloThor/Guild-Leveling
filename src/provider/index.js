import { UserProvider } from "./user";
import { GuildProvider } from "./guild";
import { QuestsProvider } from "./quests";
import { TasksGuildProvider } from "./tasksguilds";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <QuestsProvider>
        <GuildProvider>
          <TasksGuildProvider>{children}</TasksGuildProvider>
        </GuildProvider>
      </QuestsProvider>
    </UserProvider>
  );
};

export default Provider;
