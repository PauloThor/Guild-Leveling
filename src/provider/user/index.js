import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useInfoQuests } from "../quests";
import { useInfoGuild } from "../guild";

const UserContext = createContext({});

const token = JSON.parse(localStorage.getItem("@token")) || "";
const auth = JSON.parse(localStorage.getItem("@auth")) || false;
const identification = localStorage.getItem("@id") || "";

export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState({
    access: token,
    authenticated: auth,
    level: 1,
    exp: 0,
    guildRank: "Novice",
    id: identification,
    username: "",
    guilds: [],
  });
  const { infoQuests, getQuests } = useInfoQuests();
  const { updateMainGuilds } = useInfoGuild();

  const updateStatus = (quests) => {
    const values = {
      E: 5,
      D: 10,
      C: 20,
      B: 40,
      A: 80,
      S: 200,
    };

    if (!quests) {
      return;
    }

    const completed = [...quests].filter((quest) => quest.achieved === true);

    const exp = completed.reduce(
      (acc, quest) => acc + values[quest.difficulty],
      0
    );

    getStatus(exp);
  };

  const getStatus = (exp) => {
    const newUser = infoUser;

    const getRank = (level) => {
      if (level < 3) return "Novice";
      if (level < 6) return "Apprentice";
      if (level < 8) return "Assistant";
      if (level < 11) return "Adventurer";
      if (level < 16) return "Soldier";
      if (level < 21) return "Knight";
      if (level < 26) return "Commander";
      if (level < 31) return "Paladin";

      return "Champion";
    };

    const lvl = Math.floor(exp / 100) + 1;
    const newExp = exp % 100;
    const guildRank = getRank(lvl);
    const money = exp * 576;

    newUser.level = lvl;
    newUser.exp = newExp;
    newUser.guildRank = guildRank;
    newUser.currency = money;

    setInfoUser(newUser);
  };

  const history = useHistory();

  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        const { user_id } = jwt_decode(access);

        setInfoUser({ ...infoUser, access, id: user_id, authenticated: true });

        localStorage.clear();
        localStorage.setItem("@token", JSON.stringify(access));
        localStorage.setItem("@auth", true);
        localStorage.setItem("@id", user_id);
      })
      .then(() => {
        return history.push("/dashboard");
      })
      .catch((err) => console.log(err, "Erro ao logar"));
  };

  const createAccount = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        const { username, password } = data;
        const infoLogin = { username, password };
        setAuthenticated(infoLogin);
      })
      .then(() => {
        return history.push("/guildselect");
      })
      .catch((err) => console.log("Falha na criação da conta"));
  };

  const setAuthenticated = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        const { user_id } = jwt_decode(access);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(access));
        setInfoUser({ ...infoUser, access, id: user_id, authenticated: true });
        console.log(response.data);
      })
      .catch((err) => console.log(err, "Erro ao logar"));
  };

  return (
    <UserContext.Provider
      value={{ infoUser, createAccount, login, setAuthenticated, updateStatus }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useInfoUser = () => useContext(UserContext);
