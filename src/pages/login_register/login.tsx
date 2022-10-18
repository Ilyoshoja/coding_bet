import React, { useState } from "react";
import { TypePerson } from "../interface/login_register_interface";
import classes from "./login.module.scss";
import Vector from "./Vector.png";
import passwordImg from "./passwod_img.png";
import { useNavigate } from "react-router-dom";
import http from "../../service";
import { AxiosResponse } from "axios";
import {Link} from "react-router-dom";
interface SingInResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
  }
}

const Login: React.FC = () => {
  const navigation = useNavigate()
  const [ isStatus , setStatus ] = useState()
  const [person, setPerson] = useState<TypePerson>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(person);
    const user = {
      email: person.email,
      password: person.password,
    }
    
    http
      .post("auth/sign-up", user)
      .then((res) => {
        console.log("enteredin");

        console.log(res.data);
 setStatus(res.data)
        console.log("entered");
      })
      .catch((err) => {
        console.log("data", err);
        // setErrors(err.response.status);
      });
    if (isStatus === false) {
       console.log("proglenm");
    } else {
      navigation("/home")
      
    }
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.main}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        
        <label htmlFor="">
          <span>
            <img src={Vector} alt="404" />
          </span>
          <input
            type="text"
            name="email"
            placeholder="Please enter here"
            value={person.email || ""}
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
        <div className={classes.alert}></div>
        <h3>
          <Link to="/register">enter to sing-up</Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
