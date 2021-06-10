import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { FiMail, FiLock, FiUser, FiEye } from "react-icons/fi";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services";
import { useState } from "react";

const FormSing = () => {
  const [visibility, setVisibility] = useState("password");
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    email: yup.string().email("Invalid email").required("Required field"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .required("Required field"),
    // confirPassword: yup
    //   .string()
    //   .required("Required field")
    //   .oneOf([yup.ref("password")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const handleVisibility = () => {
    if (visibility === "password") setVisibility("text");
    else setVisibility("password");
  };

  //Envia os dados para cadastrar o usuário na API, e o leva para o dashboard
  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/users/", data)
      .then(() => {
        return history.push("/");
      })
      .catch((err) => console.log("Falha na criação da conta"));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Singup Guild Leveling</h2>

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
              <InputAdornment>
                <FiMail />
              </InputAdornment>
            ),
          }}
          helperText={errors.email?.message}
          {...register("email")}
          name="email"
          label="E-mail"
        />

        <TextField
          fullWidth
          type={visibility}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiLock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <FiEye onClick={handleVisibility} />
              </InputAdornment>
            ),
          }}
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
          Register
        </Button>

        <p>
          Already have an account? Login <Link to="/login">here</Link>.
        </p>
      </form>
    </Container>
  );
};

export default FormSing;
