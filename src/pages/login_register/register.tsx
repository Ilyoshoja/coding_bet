import React, { useState } from "react";
import { TypePerson } from "../interface/login_register_interface";
import Vector from "./Vector.png";
import passwordImg from "./passwod_img.png";
import classes from "./login.module.scss";
import http from "../../service";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import {Link} from "react-router-dom"
interface SingUpResponse {
  data: boolean;
  errors: [
    {
      code: number;
      fieldName: string;
      msg: string;
    }
  ];
  message: string;
  success: boolean;
}

const Register: React.FC = () => {
  const [person, setPerson] = useState<TypePerson>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<number>();
  const [isError, setError] = useState<boolean>(false);

  const navigation = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(person);

    // data user input validation
    const user = {
      email: person.email,
      password: person.password,
    };
    // sing-up user
    http
      .post("auth/sign-up", user)
      .then((res) => {

        console.log(res.data);
       
        res.data && navigation('/')
      })
      .catch((err) => {
        console.log("data", err);
        setErrors(err.response.status);
      } );
    if (errors === 400) {
      console.log("iltmos email togrim krit ");
      setError(true)
    } else if (errors === 409) {
      // setAlert(true)
      console.log("Bunday email oldindan mavjud");
    } else if (errors === 404) {
      console.log("passower xato");
    } else {
      console.log("problse");
    }
    //email is authenticated
    await http
      .get(`/auth/verification-email/${person.email}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    
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
            <img src={passwordImg} alt="404" />
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
        <div className={classes.alert}>
           
            
          {isError && (
            <Alert severity="info">Iltmos Email ni to'gri kiriting!</Alert>
          )}
        </div>
        <h3>
          <Link to="/">enter to Sing-in</Link>
        </h3>
      </form>
    </div>
  );
};

export default Register;
