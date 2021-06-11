import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";

const QuestsContext = createContext([]);

export const QuestsProvider = ({ children }) => {
  const [infoQuests, setInfoQuests] = useState([]);
  const {
    infoUser: { access, id },
  } = useInfoUser();
  const getQuests = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => setInfoQuests(response.data));
  };

  //carrega as quests ao renderizar a tela
  useEffect(() => {
    getQuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoQuests]);

  //envia p API a nova quest, *necessita o id do usuario
  const addQuest = (data) => {
    const newQuest = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: id,
    };
    api
      .post("/habits/", newQuest, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => setInfoQuests(response))
      .then(() => getQuests());
  };

  //deleta a quest usando o id da msm
  const removeQuest = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then(() => getQuests());
  };

  return (
    <QuestsContext.Provider value={{ infoQuests, addQuest, removeQuest }}>
      {children}
    </QuestsContext.Provider>
  );
};

export const useInfoQuests = () => useContext(QuestsContext);
