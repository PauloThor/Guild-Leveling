import { UserProvider } from "./user";
import { GuildProvider } from "./guild";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <GuildProvider>{children}</GuildProvider>
    </UserProvider>
  );
};

export default Provider;
