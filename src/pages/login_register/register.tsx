import React, { useState } from "react";
import { TypePerson } from "../interface/login_register_interface";
import stype from "./login.module.scss";
import Vector from "./Vector.png";
import passwordImg from "./passwod_img.png";
import classes from "./login.module.scss";
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
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
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.main}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>

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
        <button className={classes.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
