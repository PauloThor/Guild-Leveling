import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const UserContext = createContext({});
const token = JSON.parse(localStorage.getItem("@habits:token")) || "";
const auth = JSON.parse(localStorage.getItem("@habits:auth")) || false;

export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState({
    access: token,
    authenticated: auth,
  });

  const history = useHistory();

  //Da um post na API com os dados inseridos, e coloca o token da resposta no localStorage
  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data; //desestrutura a resposta, pegando somente o access(token)
        const { user_id } = jwt_decode(access);
        setInfoUser({ access, id: user_id, authenticated: true });
        localStorage.clear();
        localStorage.setItem("@habits:token", JSON.stringify(access));
        localStorage.setItem("@habits:auth", true);
      })
      .then(() => {
        return history.push("/dashboard");
      })
      .catch(() => toast.error("Invalid username/password."));
  };

  //Envia os dados para cadastrar o usuário na API, e o leva para o dashboard
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
      .catch(() => toast.error("Username already exists."));
  };

  const setAuthenticated = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        const { user_id } = jwt_decode(access);
        setInfoUser({ access, id: user_id, authenticated: true });
      })
      .catch((err) => console.log(err, "Erro ao logar"));
  };

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
    <UserContext.Provider
      value={{ infoUser, createAccount, login, setAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useInfoUser = () => useContext(UserContext);
