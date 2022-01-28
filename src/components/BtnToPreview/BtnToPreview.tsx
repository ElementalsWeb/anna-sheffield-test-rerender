import React, {FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightLightSVG } from "../../assets";
import { setActiveAuxiliaryButtons, setStepConfig } from "../../store/actions/Settings";
import { activeStepConfig } from "../../store/interface";
import { getAllPriceActiveListElement } from "../../store/selectors/selectors";
import { getPrice, numberWithCommas } from "../../utils/helpersFunction";
import s from "./BtnToPreview.module.scss";

interface PROPS{
  setAuxiliaryButtonsActive?: boolean;
}
export const BtnToPreview:FC<PROPS> = ({setAuxiliaryButtonsActive}) => {

  const dispatch = useDispatch();

  const changeStepConfig = (stepConfig: activeStepConfig) => {
    dispatch(setStepConfig(stepConfig));
    dispatch(setActiveAuxiliaryButtons(false));
  };
  const allPrice:any = useSelector(getAllPriceActiveListElement);

 

  return (
    <div className={setAuxiliaryButtonsActive ? s.btn_go_basket_mobile :s.btn_go_basket} onClick={() => changeStepConfig('basket')}>
      <div className={s.text}>REVIEW & ADD TO BAG</div>
      <div className={s.box}>
          <span>${getPrice(allPrice)}</span>
          <ArrowRightLightSVG />
      </div>
    </div>
  );
};
