import React from "react";
import classes from "./home.module.scss";
import Coding from "./img/Coding.png";
import Bat from "./img/BAT.png";
import Pagination from "@mui/material/Pagination";
import http from "../../service";
import LanguageLine from "./languageline";
import { LanguageType } from "../interface/language";
import Sections, { SectionsType } from "../sections/sections";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigate();
  const [section, setSection] = React.useState<SectionsType[]>([]);
  const [icons, setIcons] = React.useState<LanguageType[]>([]);
  const [languageID, setLanguageID] = React.useState<number>(2);

  //logout
  const handleLogout = () => {
     localStorage.removeItem("user")
     navigation("/")
   }

  // sectins
  React.useEffect(() => {
    http
      .get("language/list-for-users")
      .then((res) => setIcons(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // enter to language selection
  const getElementId = (id:number) => {
    console.log(id);
    setLanguageID(id);
  };

 // get section id
  const getSectionId = (id:number) => {
   console.log(id)
 }
  React.useEffect(() => {
    console.log("id", languageID);
    http
      .get(`section/by-language-id/${languageID}`, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYW1zaGlkYmVrZDY2NEBnbWFpbC5jb20iLCJpYXQiOjE2NjYxNTMzMzksImV4cCI6MTY2NjIyNTMzOX0.BKp2Ud1LG_b_KGWWbzpHQJA4wyWlXJ9JKAGUrxxz2YPeegmUZK5xTV5voUMrDiXn13C7g_pK6wywhTiBfrMvDQ",
        },
      })
      .then((res) => {
        setSection(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [languageID]);
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
            <button onClick={handleLogout} className={classes.singup}>
              LogOut
            </button>
          </div>
        </div>
      </nav>
      <div className={classes.line}>
        <div className={classes.language}>
          {icons &&
            icons.map((value, index) => {
              return (
                <LanguageLine
                  key={index}
                  url={value.url}
                  id={value.id}
                  getElementId={getElementId}
                />
              );
            })}
        </div>
      </div>

      <div className={classes.cards}>
        {section ? (
          section.map((value, key) => {
            return (
              <Sections
                key={key}
                title={value.title}
                description={value.description}
                maxRate={value.maxRate}
                id={value.id}
                getSectionId={getSectionId}
              />
            );
          })
        ) : (
          <div className={classes.emty}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
          </div>
        )}
      </div>

      <Pagination
        count={2}
        variant="outlined"
        shape="rounded"
        className={classes.pagination}
        
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

/* <div
            className={`${!select && classes.border}`}
            onClick={() => setSelect(false)}
          >
            <img
              src="https://img.icons8.com/color/344/javascript-coffee-cup-logo--v1.png"
              alt="404"
            />
            <span className={classes.text}>Java</span>{" "}
          </div> */

//ss
/* {select
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
            })} */
