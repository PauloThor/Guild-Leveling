import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState({});

  return (
    <UserContext.Provider value={{ infoUser, setInfoUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useInfoUser = () => useContext(UserContext);
