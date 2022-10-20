import React, { useState } from "react";
import { TypePerson } from "../interface/login_register_interface";
import Vector from "./img/Vector.png";
import passwordImg from "./img/passwod_img.png";
import classes from "./login.module.scss";
import http from "../../service";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
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
  const [isError, setIsError] = useState<boolean>(false);

  const navigation = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const [isStatus, setStatus] = useState<boolean>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(person);

    // data user input validation
    const user = {
      email: person.email,
      password: person.password,
    };
    try {
      // sing-up user
      const { data }: AxiosResponse<SingUpResponse> = await http.post(
        "/auth/sign-up",
        user
      );

      await http.get(`/auth/verification-email/${person.email}`);

      console.log("success = ", data.success);
      if (data.success === true) {
        navigation("/")
      } else {
        setIsError(true)
      }

    } catch (error) { console.log(error);}
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
          {isError && <Alert severity="warning">There is such a user</Alert>}
        </div>
        <h3>
          <Link to="/">enter to Sing-in</Link>
        </h3>
      </form>
    </div>
  );
};

export default Register;
