import { UserProvider } from "./user";
import { GuildProvider } from "./guild";
import { QuestsProvider } from "./quests";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <QuestsProvider>
        <GuildProvider>{children}</GuildProvider>
      </QuestsProvider>
    </UserProvider>
  );
};

export default Provider;
