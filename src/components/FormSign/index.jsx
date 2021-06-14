import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { InputAdornment, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import RPG from "../../assets/rpg.png";
import { Container } from "./styles";
import * as yup from "yup";
import { useInfoUser } from "../../provider/user";

const FormSing = () => {
  const [inputType, setInputType] = useState("password");
  const [user, setUser] = useState([]);
  const { createAccount } = useInfoUser();

  const schema = yup.object().shape({
    username: yup.string().required("Required field."),
    email: yup.string().email("Invalid email.").required("Required field"),
    password: yup
      .string()
      .min(6, "Password must contain at least 6 characters.")
      .required("Required field"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleVisibility = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  useEffect(() => {
    if (user.username) {
      createAccount(user);
    }
    // eslint-disable-next-line
  }, [user]);

  const onSubmit = (data) => {
    setUser({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Container>
      <div className="img">
        <h1>Imagem aqui</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <div className="signup-header">
            <img src={RPG} alt="shield" />
            <h1>Create Account</h1>
          </div>
        </div>

        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <FiUser />
              </InputAdornment>
            ),
          }}
          helperText={errors.username?.message}
          {...register("username")}
          placeholder="username"
          label="Username"
        />

        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <FiMail />
              </InputAdornment>
            ),
          }}
          helperText={errors.email?.message}
          {...register("email")}
          placeholder="email"
          label="E-mail"
        />

        <div className="password">
          <TextField
            variant="outlined"
            type={inputType}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiLock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {inputType === "password" ? (
                    <FiEyeOff onClick={handleVisibility} />
                  ) : (
                    <FiEye onClick={handleVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
            helperText={errors.password?.message}
            {...register("password")}
            placeholder="password"
            label="Password"
          />

          <TextField
            variant="outlined"
            type={inputType}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiLock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {inputType === "password" ? (
                    <FiEyeOff onClick={handleVisibility} />
                  ) : (
                    <FiEye onClick={handleVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            placeholder="password"
            label="Confirm Password"
          />
        </div>

        <input type="submit" className="button" value="Register" />

        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </Container>
  );
};

export default FormSing;
