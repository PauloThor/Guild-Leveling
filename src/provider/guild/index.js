import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";
const GuildContext = createContext([]);

export const GuildProvider = ({ children }) => {
  const [infoGuilds, setInfoGuilds] = useState([]);
  const [infoGuild, setInfoGuild] = useState([]);
  const {
    infoUser: { access, id },
  } = useInfoUser();
  /*Filtra as guilds por meio da category delas, o user entra
  com a string e ela vai como query parameter no get*/
  const searchGuilds = (itemToSearch) => {
    api
      .get(`/groups/?category=${itemToSearch}`)
      .then((respose) => setInfoGuilds(respose.data.results));
  };

  //Pega uma guilda especifica com a id da msms;
  const getSpecificGuild = (id) => {
    api.get(`/groups/${id}`).then((response) => setInfoGuild(response));
  };

  //Inserir o user na guild passando
  const joinGuild = (id) => {
    console.log(access);
    console.log(id);

    api
      .post(`/groups/${id}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const createGuild = () => {
    api.post(
      "/groups/",
      {
        name: "novagildlvl",
        description: "arzin",
        category: "gl-teste",
      },
      {
        header: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
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
      value={{ infoGuild, infoGuilds, searchGuilds, joinGuild, createGuild }}
    >
      {children}
    </GuildContext.Provider>
  );
};

export const useInfoGuild = () => useContext(GuildContext);
