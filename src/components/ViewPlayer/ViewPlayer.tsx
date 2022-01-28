import React from "react";

import s from "./ViewPlayer.module.scss";
import { PlayerThreeKit } from "../PlayerThreeKit/PlayerThreeKit";
import { AuxiliaryButton } from "../AuxiliaryButton/AuxiliaryButton";

export const ViewPlayer = () => {
  return (
    <div className={s.player_screen}>
      <AuxiliaryButton/>
      <PlayerThreeKit />
    </div>
  );
};
