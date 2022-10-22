import React from "react";
import { useParams } from "react-router-dom";
import http from "../../service";
import star from "../home/img/star.png";
import stars from "../home/img/stars.png";
import classes from "./section.module.scss";
import { WarmupType } from "./type";
//  interface SectionsType {
//   title: string;
//   description:string
//   maxRate: number;
//   key: number;
//   id: number;
//   getSectionId: any;
// }
const Sections: React.FC = () => {
const {sectionID} = useParams()
const [warmup , setWarmup] = React.useState<WarmupType[]>([])
  React.useEffect(() => {
    http.get(`/problem/by-section/${sectionID}`).then(({ data }) => {
      console.log(data)
      setWarmup(data.data)
    });
  },[sectionID])
  return (
    <div className={classes.wrapper}>

        
         { warmup.map((section) => {
            return (
              <div className={classes.card} key={section.id}>
                <h1 className={classes.title}>{section.title}</h1>
                <p className={classes.text}>{section.description}</p>
                <h4>{section.methodSignature}</h4>
                <br />
                <div>
                  {
                    section.cases.map((value) => {
                      return (
                        <h3>{value.args}</h3>
                      )
                    })
                  }
</div>
              </div>
            )
          })}
      
  </div>
  )
      
    
};

export default Sections;


{/* < div>
              <h1 className={classes.text}>{ }</h1>
              <div className={classes.star}>
                {[...Array(9)].map((x) => (
                  <span >
                    <img src={stars} alt="" />
                  </span>
                ))}

                <span>
                  <img src={star} alt="" />
                </span>
              </div>
              <div className={classes.title}>{ }</div>

              <h3 className={classes.result}>
                <span>
                  <img src="" alt="" />
                </span>{" "}
                Task
              </h3>
              )
            </div> */}
    // 