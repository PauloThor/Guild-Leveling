import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../services";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./styles";
import Quest from "../Quest";

const QuestList = () => {
  const [quests, setQuests] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("@habits:token")));

  const { user_id } = jwt_decode(token);

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    category: yup.string().required("Required field"),
    difficulty: yup.string().required("Required field"),
    frequency: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //requisição na API passando o token, recebe todas quests do user
  const getQuests = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setQuests(response.data));
  };

  //carrega as quests ao renderizar a tela
  useEffect(() => {
    getQuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //envia p API a nova quest, *necessita o id do usuario
  const addQuest = (data) => {
    const newQuest = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: user_id,
    };
    api
      .post("/habits/", newQuest, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setQuests(response))
      .then(() => getQuests());
  };

  //deleta a quest usando o id da msm
  const removeQuest = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getQuests());
  };

  return (
    <>
      <h2>Quests</h2>

      <form onSubmit={handleSubmit(addQuest)}>
        <TextField
          fullWidth
          helperText={errors.title?.message}
          {...register("title")}
          label="Título"
          name="title"
        />

        <TextField
          fullWidth
          helperText={errors.category?.message}
          {...register("category")}
          name="category"
          label="Categoria"
        />

        <TextField
          fullWidth
          helperText={errors.difficulty?.message}
          {...register("difficulty")}
          name="difficulty"
          label="Dificuldade"
        />

        <TextField
          fullWidth
          helperText={errors.frequency?.message}
          {...register("frequency")}
          name="frequency"
          label="Frequencia"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Cadastrar
        </Button>
      </form>
      <div>
        {quests.length > 0 &&
          quests.map((quest, index) => (
            <div key={index}>
              <h3>{quest.title}</h3>
              <p>Categoria: {quest.category}</p>
              <p>Dificuldade: {quest.difficulty}</p>
              <p>Frequencia: {quest.frequency}</p>
              <button onClick={() => removeQuest(quest.id)}>Remover</button>
            </div>
          ))}
        {quests.length > 0 &&
          quests.map((quest, i) => (
            <Quest name={quest.title} rank={quest.difficulty} />
          ))}
      </div>
    </>
  );
};

export default QuestList;
