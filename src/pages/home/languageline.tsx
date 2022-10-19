import React from "react";
import classes from "./home.module.scss";

interface LanguageLine {
  url: string;
  id: number;
  getElementId: any;
  key: number;
}

const Section: React.FC<LanguageLine> = (props) => {
  return (
    <div key={props.key} onClick={()=>props.getElementId(props.id)} >
      <img
        src={`https://img.icons8.com/color/344/${props.url}--v1.png`}
        alt="404"
      />
      <span className={classes.text}>{props.url}</span>
    </div>
  );
};

export default Section;
