import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState({});

  const history = useHistory();

  //Da um post na API com os dados inseridos, e coloca o token da resposta no localStorage
  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data; //desestrutura a resposta, pegando somente o access(token)
        const { user_id } = jwt_decode(access);
        setInfoUser({ access, id: user_id });
      })
      .then(() => {
        return history.push("/dashboard");
      })
      .catch((err) => console.log(err, "Erro ao logar"));
  };

  //Envia os dados para cadastrar o usuário na API, e o leva para o dashboard
  const createAccount = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        return history.push("/guildselect");
      })
      .catch((err) => console.log("Falha na criação da conta"));
  };

  return (
    <UserContext.Provider value={{ infoUser, createAccount, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useInfoUser = () => useContext(UserContext);
