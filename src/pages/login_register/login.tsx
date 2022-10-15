import React, { useState } from "react";
import { TypePerson } from "../interface/login_register_interface";
import classes from "./login.module.scss";
import Vector from "./Vector.png";
import passwordImg from "./passwod_img.png";
import { useNavigate } from "react-router-dom";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const navigation = useNavigate()
  const [person, setPerson] = useState<TypePerson>({
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(person);
    navigation("/")
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.main}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        
        <label htmlFor="">
          <span>
            <img src={Vector} alt="" />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Please enter here"
            value={person.username || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <h3>Password</h3>
        <label htmlFor="">
          <span>
            <img src={passwordImg} alt="" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={person.password || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className={classes.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
