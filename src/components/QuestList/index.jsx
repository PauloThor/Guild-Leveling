import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useInfoQuests } from "../../provider/quests";
import "./styles";
import Quest from "../Quest";
import { useInfoUser } from "../../provider/user";

const QuestList = () => {
  const { infoQuests, addQuest, removeQuest } = useInfoQuests();
  const { getExp } = useInfoUser();

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
        {infoQuests.length > 0 &&
          infoQuests.map((quest, i) => (
            <Quest name={quest.title} rank={quest.difficulty} />
          ))}
        <button onClick={() => getExp(infoQuests)}>Soma</button>
      </div>
    </>
  );
};

export default QuestList;
