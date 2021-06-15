import { UserProvider } from "./user";
import { GuildProvider } from "./guild";
import { QuestsProvider } from "./quests";
import { TasksGuildContext } from "./tasksguilds";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <QuestsProvider>
        <GuildProvider>
          <TasksGuildContext>{children}</TasksGuildContext>
        </GuildProvider>
      </QuestsProvider>
    </UserProvider>
  );
};

export default Provider;
