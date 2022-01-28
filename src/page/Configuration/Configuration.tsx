import React, { useEffect } from "react";
import { Stepper } from "../../components/Stepper/Stepper";
import { ViewEmpty } from "../../components/ViewEmpty/ViewEmpty";
import s from "./Configuration.module.scss";
import { WrapModals } from "../../components/WrapModals/WrapModals";

import { ControlsComponent } from "../../components/ControlsComponent/ControlsComponent";
import { AuxiliaryButton } from "../../components/AuxiliaryButton/AuxiliaryButton";
import { PlayerThreeKit, THREEKIT_PARAMS } from "../../components/PlayerThreeKit/PlayerThreeKit";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStandartGroup, setSharedInfo, setActiveAuxiliaryButtons } from "../../store/actions/Settings";
import { getSavedConfiguration } from "../../threekit/http/configuration";

export const Configuration = () => {

  const search = useLocation().search;
  const type = new URLSearchParams(search).get('type');

  let wrapView = `${s.wrap_view}`;

  const dispatch = useDispatch();
  dispatch(setStandartGroup({ type }));

  let idConfig = new URLSearchParams(search).get('sku');


  useEffect(() => {
    async function fetchConfig() {
      let result = await getSavedConfiguration({ ...THREEKIT_PARAMS, configurationId: idConfig });
      await dispatch(setSharedInfo(result));
    }
    if (!!idConfig) {
      fetchConfig();
    }
  }, []);

  return (<>2
    <section className={s.section_full}>
      <div className={wrapView}>
        <Stepper></Stepper>
        <div className={s.view}>
          <div className={s.player_screen}>
            <AuxiliaryButton />
            <PlayerThreeKit />
          </div>
        </div>
      </div>
      <ControlsComponent />
      <WrapModals />
    </section></>
  );
}; 