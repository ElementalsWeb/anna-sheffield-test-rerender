import React from "react";
import { useSelector } from "react-redux";
import { getCountActiveRing } from "../../store/selectors/selectors";
import s from "./ViewEmpty.module.scss";

export const ViewEmpty = () => {
  const countActiveRings = useSelector(getCountActiveRing);

  return (<>
    {countActiveRings < 1 && (
      <div className={s.empty_screen}>
        <div className={s.text}>PLEASE Select A RING or band FIRST</div>
      </div>)}

  </>)

};
