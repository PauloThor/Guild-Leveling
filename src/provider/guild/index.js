import { createContext, useContext, useState } from "react";
import api from "../../services";

const GuildContext = createContext([]);

export const GuildProvider = ({ children }) => {
  const [infoGuilds, setInfoGuilds] = useState([]);
  const [infoGuild, setInfoGuild] = useState([]);

  /*Filtra as guilds por meio da category delas, o user entra
  com a string e ela vai como query parameter no get*/
  const searchGroup = (itemToSearch) => {
    api
      .get(`/groups/?category=${itemToSearch}`)
      .then((respose) => setInfoGuilds(respose.data.results));
  };

  const getSpecificGuild = (id) => {
    api.get(`/groups/${id}`).then((response) => setInfoGuild(response));
  };

  // const [token] =
  // useState(JSON.parse(localStorage.getItem("@habits:token"))) || "";
  // const [userGuilds, setUserGuilds] = useState([]);

  //Pega as guilds que o user está, so precisa do token do user
  // const getUserGuilds = () => {
  //   api
  //     .get("/groups/subscriptions/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => setUserGuilds(response.data));
  // };

  //Criando uma guild, so precisa do token do user
  // const createGuild = (data) => {
  //   api
  //     .post("/groups/", data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => setUserGuilds(response))
  //     .then(() => getUserGuilds());
  // };

  //Caso precise renderizar
  // useEffect(() => {
  //   getUserGuilds();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userGuilds]);

  return (
    <GuildContext.Provider
      value={{ infoGuild, infoGuilds, searchGroup, getSpecificGuild }}
    >
      {children}
    </GuildContext.Provider>
  );
};

export const useInfoGuild = () => useContext(GuildContext);
