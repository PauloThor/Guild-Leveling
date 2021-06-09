import { createContext, useContext, useState } from "react";

const GuildContext = createContext([]);

export const GuildProvider = ({ children }) => {
  const [infoGuild, setInfoGuild] = useState([]);

  return (
    <GuildContext.Provider value={{ infoGuild, setInfoGuild }}>
      {children}
    </GuildContext.Provider>
  );
};

export const useInfoGuild = () => useContext(GuildContext);
