import React from "react";
import { Link } from "react-router-dom";
import s from "./StartPage.module.scss"; 
export const StartPage = () => {

 
  return (
    <div className={s.wrapPage}>
      <div className={s.startScrin}>
        <div className={s.img}>
          <img src="/img/pictureStarScrin.jpg" alt="" />
        </div>
        <div className={s.info}>
          <div className={s.title}>Customize Your Ring Stack</div>
          <div className={s.description}>
            Discover infinite ring and band combinations for a sparkling look all your own—and a distinctly modern way to mark your forever moments.
          </div>
          <div className={s.box_button}>
            <Link to="/?type=engagement" className={s.btn}> Begin with Engagement Ring </Link>
            <Link to="/?type=bands" className={s.btn}> Begin with Stacking Band </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
