import React from "react";
import classes from "./question.module.scss";
import star from "./img/star.png"
import starn from "./img/starn.png"
interface QuestionProps {
  name: string;
  key: number;
  title: string;
  id:number
}
const Question: React.FC<QuestionProps> = (props) => {
  return (
    <div key={props.id} className={classes.card}>
      <h1 className={classes.text}>{props.name}</h1>
      <div key={props.id} className={classes.star}>
        <span ><img src={starn} alt="" /></span>
        <span ><img src={starn} alt="" /></span>
        <span ><img src={starn} alt="" /></span>
        <span ><img src={starn} alt="" /></span>

        <span><img src={star} alt="" /></span >
      </div>
      <div className={classes.title}>{props.title}</div>

      <h3 className={classes.result}>
        <span>
          <img src="" alt="" />
        </span>{" "}
        Task
      </h3>
    </div>
  );
};

export default Question;
