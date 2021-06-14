import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useInfoQuests } from "../../provider/quests";
import "./styles";
import { useEffect } from "react";
import Quest from "../Quest";
import { useInfoUser } from "../../provider/user";
import RankQuests from "./RankQuests";
import DailyQuests from "./DailyQuests";

const QuestList = () => {
  const {
    getQuests,
    infoQuests,
    addQuest,
    removeQuest,
    getCurrentQuests,
    currentQuests,
  } = useInfoQuests();

  const { infoUser, updateStatus } = useInfoUser();

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    category: yup.string().required("Required field"),
    difficulty: yup.string().required("Required field"),
    frequency: yup.string().required("Required field"),
  });

  useEffect(() => {
    getQuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const currentLevel = infoUser.level;
  //   updateStatus(infoQuests);

  //   if (infoUser.level !== currentLevel) {
  //     getCurrentQuests();
  //   }
  //   console.log(infoUser);
  //   // eslint-disable-next-line
  // }, [infoUser, infoQuests]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      {/* <h2>Quests</h2>

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
      </form> */}
      <div>
        {infoQuests.length > 0 &&
          infoQuests.map((quest, index) => (
            <div key={index}>
              <h3>{quest.title}</h3>
              <p>Categoria: {quest.category}</p>
              <p>Dificuldade: {quest.difficulty}</p>
              <p>Frequencia: {quest.frequency}</p>
              <button onClick={() => removeQuest(quest.id)}>Remover</button>
            </div>
          ))}
        <div style={{ display: "flex" }}>
          <RankQuests />
          <DailyQuests />
        </div>
        <button onClick={() => updateStatus(infoQuests)}>Testar status</button>
        <button onClick={() => getCurrentQuests()}>Testar quests atuais</button>
      </div>
    </>
  );
};

export default QuestList;
