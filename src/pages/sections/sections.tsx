import React from "react";
import classes from "./section.module.scss";
import star from "../home/img/star.png";
import starn from "../home/img/starn.png";
export interface SectionsType {
  title: string;
  description:string
  maxRate: number;
  key: number;
  id: number;
  getSectionId: any;
}
const Sections: React.FC<SectionsType> = (props) => {
  return (
    <div
      key={props.key}
      onClick={() => props.getSectionId(props.id)}
      className={classes.card}
    >
      <h1 className={classes.text}>{props.title}</h1>
      <div className={classes.star}>
        {[...Array(props.id)].map((x) => (
          <span>
            <img src={starn} alt="" />
          </span>
        ))}

        <span>
          <img src={star} alt="" />
        </span>
      </div>
      <div className={classes.title}>{props.description}</div>

      <h3 className={classes.result}>
        <span>
          <img src="" alt="" />
        </span>{" "}
        Task
      </h3>
    </div>
  );
};

export default Sections;
