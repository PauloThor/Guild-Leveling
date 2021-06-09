<<<<<<< HEAD
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { FiLock, FiUser } from "react-icons/fi";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services";

const FormLogin = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  //Da um post na API com os dados inseridos, e coloca o token da resposta no localStorage
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Guild Leveling</h2>

        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <FiUser />
              </InputAdornment>
            ),
          }}
          helperText={errors.username?.message}
          {...register("username")}
          label="Username"
          name="username"
        />

        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiLock />
              </InputAdornment>
            ),
          }}
          helperText={errors.password?.message}
          {...register("password")}
          name="password"
          label="Password"
          type="password"
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
          Don't have an account? Register<Link to="/">here</Link>.
        </p>
      </form>
    </Container>
  );
=======
const FormLogin = () => {
  return <div></div>;
>>>>>>> fe5b738e19e89249f3ab73d2b7c11e339bc28a26
};

export default FormLogin;
