import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState({});

  const getExp = (quests) => {
    const values = {
      E: 5,
      D: 10,
      C: 20,
      B: 40,
      A: 80,
      S: 200,
    };
    let exp = quests
      .filter((quest) => quest.achieved === true)
      .reduce((acc, quest) => acc + values[quest.difficulty], 0);

    const newUser = infoUser;
    newUser.exp = exp;

    setInfoUser(newUser);
  };

  return (
    <UserContext.Provider value={{ infoUser, setInfoUser, getExp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useInfoUser = () => useContext(UserContext);
