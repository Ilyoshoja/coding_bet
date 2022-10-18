import React from "react";
import classes from "./home.module.scss";
import Question from "./question";
import Coding from "./img/Coding.png";
import Bat from "./img/BAT.png";
import Pagination from "@mui/material/Pagination";
import { java } from "./arrays";
import { python } from "./arrays";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import http from "../../service";
interface HomeProps {}
interface arrayType {
  id: number;
  title: string;
}

const Home: React.FC<HomeProps> = () => {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();
  const [select, setSelect] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<boolean>(false);
  const [icons , setIcons] = React.useState({});
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    http
      .get("language/list-for-users")
      .then((res) => setIcons(res.data))
      .catch((err) => console.log(err));
  }, []);
  const languageID = 1;
  // enter to language selection
  React.useEffect(() => {
    http
      .get(`/section/by-language-id/${languageID}`, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjNAZG9tYWluLmNvbSIsImlhdCI6MTY2NjA3NDg3MiwiZXhwIjoxNjY2MTQ2ODcyfQ.ubjXOEvz1l_qQaevHi8yI2DqaljRkrN9RUlNDnCL8Gn3fMxVqFD8nD_R_60rE5P4lakNxX8V0mWq1NqO3MspKg",
        },
      })
      .then((data) => {
        console.log("data = ", data);
      });
  }, []);
  return (
    <div className={classes.wrapper}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <div className={classes.icon}>
            <img src={Coding} alt="CODING" />{" "}
            <span>
              <img src={Bat} alt="BAT" />
            </span>
            <h6 className={classes.smile}>code practice</h6>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={classes.navlink}>About</li>
            <li className={classes.navlink}>Help</li>
            <li className={classes.navlink}>Code</li>
            <li className={classes.navlink}>help+videos</li>

            <li className={classes.navlink}>Done</li>
            <li className={classes.navlink}>Prefs</li>
          </ul>
          <div className={classes.buttons}>
            <button onClick={() => navigation("/")} className={classes.singin}>
              Sing In
            </button>
            <button
              onClick={() => navigation("/register")}
              className={classes.singup}
            >
              Sing Up
            </button>
          </div>
        </div>
      </nav>
      <div className={classes.line}>
        <div className={classes.language}>
          {

          }
          {/* <div
            className={`${!select && classes.border}`}
            onClick={() => setSelect(false)}
          >
            <img
              src="https://img.icons8.com/color/344/java-coffee-cup-logo--v1.png"
              alt="404"
            />
            <span className={classes.text}>Java</span>{" "}
          </div>

          <p></p>
          <div
            className={`${select && classes.border}`}
            onClick={() => setSelect(true)}
          >
            <img
              src="https://img.icons8.com/color/344/python--v1.png"
              alt="404"
            />
            <span className={classes.text}>Python</span>
          </div> */}
        </div>
      </div>

      <div className={classes.cards}>
        {select
          ? python.map((item, index) => {
              return (
                <Question
                  name={item.name}
                  title={item.title}
                  key={index}
                  id={index}
                />
              );
            })
          : java.map((item, index) => {
              return (
                <Question
                  name={item.name}
                  title={item.title}
                  key={index}
                  id={index}
                />
              );
            })}
      </div>

      <Pagination
        count={2}
        variant="outlined"
        shape="rounded"
        className={classes.pagination}
        onClick={() => setSelect(true)}
      />
      <div className={classes.container_footer}>
        <div className={classes.box}>
          <h2 className={classes.box_name}>Java Help</h2>
          <div className={classes.box_link}>
            <p>Java Example Solution Code</p>
            <p>Java String Introduction (video)</p>
            <p>Java Substring v2 (video)</p>
            <p>Java String Equals and Loops</p>
            <p>Java String indexOf and Parsing</p>
            <p>Java If and Boolean Logic</p>
            <p>If Boolean Logic Example Solution Code 1-(video)</p>
            <p>If Boolean Logic Example Solution Code 2-(video)</p>
            <p>Java For and While Loops</p>
            <p>Java Arrays and Loops</p>
            <p>Java Map Introduction</p>
            <p>Java Map WordCount</p>
            <p>Java Functional Mapping</p>
            <p>Java Functional Filtering</p>
          </div>
        </div>
        <div className={classes.box}>
          <h2 className={classes.box_name}>Misc Code Practice</h2>
          <div className={classes.box_link}>
            <p>Code Badges</p>
            <p>Introduction to Mod (video)</p>
            <p>MakeBricks problem and solution (video x 2)</p>
            <p>FizzBuzz the famous code interview question(video)</p>
          </div>
        </div>
      </div>

      <h3 className={classes.button_title}>
        {/* Copyright Nick Parlante 2017 - privacy */}
      </h3>
    </div>
  );
};

export default Home;
