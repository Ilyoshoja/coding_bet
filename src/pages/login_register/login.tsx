import React, { useState , useEffect} from "react";
import { TypePerson } from "../interface/login_register_interface";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./login.module.scss";
import Vector from "./Vector.png";
import passwordImg from "./passwod_img.png";
import http from "../../service";
interface SingInResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
  };

  
}

const Login: React.FC = () => {
  const navigation = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const [person, setPerson] = useState<TypePerson>({
    email: "",
    password: "",
  });
  useEffect(() => {

    const value = localStorage.getItem("user");
    if (typeof value === "string") {
      const parse = JSON.parse(value); // ok
      console.log(parse)
      http.post("/auth/sign-in", parse).then((res) => {
      if (res.data.success === true) {
        navigation("/home");
      } else {
        setIsError(true);
      }}
      );

    } else {
      console.log("error localStorage")
    }
    
  },[]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(person);
    const user = {
      email: person.email,
      password: person.password,
    };

     try {
       // sing-up user
       const { data }: AxiosResponse<SingInResponse> = await http.post(
         "/auth/sign-in",  
         user
       );

       console.log("success = ", data.success);
       if (data.success === true) {
         localStorage.setItem("user", JSON.stringify(user));
         navigation("/home");
       } else {
         setIsError(true);
       }
     } catch (error) {
       console.log(error);
       error && setIsError(true);
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
            type="email"
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
        <button className={classes.button} type="submit">
          Login
        </button>
        <div className={classes.alert}></div>
        <div>
          {isError && (
            <Alert severity="info">Such a user could not be found</Alert>
          )}
        </div>
        <h3>
          <Link to="/register">enter to sing-up</Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
