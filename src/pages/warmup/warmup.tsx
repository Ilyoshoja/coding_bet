import { useSelect } from "@mui/base";
import React from "react";
import { useParams } from "react-router-dom";
import http from "../../service";
import cls from "./warmup.module.scss";
import starn from "../home/img/starn.png";
interface WarmupProps {}

interface Warmuped {
  description: string;
  id: number;
  methodSignature: string;
  section: string;
  title: string;
}
const Warmup: React.FC<WarmupProps> = () => {
  const { id } = useParams();
  const [section, setSection] = React.useState<Warmuped[]>([]);
  React.useEffect(() => {
    http
      .get(`problem/by-section/${id}`, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYW1zaGlkYmVrZDY2NEBnbWFpbC5jb20iLCJpYXQiOjE2NjYyMzcxNjAsImV4cCI6MTY2NjMwOTE2MH0.OIOgbt3a5giTpvk_KUjnMWPDy9_MJI6mQoXj-KPFwGp_1JZ4WyJnHIujFqG7urFV-ZflePD0-lBFMvQis0ruHw",
        },
      })
      .then((res) => {
        console.log(res);
        setSection(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(section);
  return (
    <div className={cls.warmup}>
      {section.map((value, key) => {
        return (
          <div className={cls.cards} key={key}>
            <h2 className={cls.text}>Warmup-{value.section}</h2>
            <div className={cls.star}>
              {[...Array(value.id)].map((x) => (
                <span>
                  <img src={starn} alt="" />
                </span>
              ))}
            </div>
            <h5>{value.description}</h5>
            <h5>{value.methodSignature}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Warmup;
