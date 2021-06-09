import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services";

//import {Container} from './styles'

const FormLogin = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minímo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  //Da um post na api com os dados inseridos, e coloca o token da resposta no localStorage
  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data; //desestrutura a resposta, pegando somente o access(token)
        localStorage.setItem("@habits:token", JSON.stringify(access));
      })
      .then(() => {
        return history.push("/dashboard");
      })
      .catch((err) => console.log("Erro ao logar"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login Guild Leveling</h2>

      <TextField
        fullWidth
        helperText={errors.username?.message}
        {...register("username")}
        label="Username"
        name="username"
      />

      <TextField
        fullWidth
        helperText={errors.password?.message}
        {...register("password")}
        name="password"
        label="Password"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >
        Enter
      </Button>

      <p>
        Don't have an account? Register<Link to="/singup">here</Link>.
      </p>
    </form>
  );
};

export default FormLogin;
