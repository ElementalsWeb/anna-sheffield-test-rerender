import s from "./ControlsComponent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { activeStepConfig } from "../../store/interface";
import {

  getCountActiveRing,
  getStepConfig,
  getNextButtonFlag,
  getLoadConfig,
  isCheckEngagement,
  getIndexSection,
} from "../../store/selectors/selectors";
import { BtnToPreview } from "../BtnToPreview/BtnToPreview";
import { GroupBasket } from "../GroupBasket/GroupBasket";
import { WrapRingSection } from "../WrapRingSection/WrapRingSection";
import { WrapRingSectionMobile } from "../WrapRingSectionMobile/WrapRingSectionMobile";
import NextButton from "../NextButton/NextButton";
import { AuxiliaryButtonMobile } from "../AuxiliaryButtonMobile/AuxiliaryButtonMobile";
import { LoaderDesctop } from "../LoaderDesctop/LoaderDesctop";
import { LoaderMobil } from "../LoaderMobil/LoaderMobil";


export const ControlsComponent = () => {

  const countActiveRings = useSelector(getCountActiveRing);
  const indexSection = useSelector(getIndexSection);
  const { isCheck, stepSection } = useSelector(isCheckEngagement);
  const loadButtonFlag = useSelector(getLoadConfig);
  const stepConfig: activeStepConfig = useSelector(getStepConfig);
  const setAuxiliaryButtonsActive: boolean = useSelector(getNextButtonFlag);
  let wrapSection = `${s.wrap_list}`;


  if (isCheck && stepSection !== indexSection) wrapSection += ` ${s.wrap_engagement}`;
  if (stepConfig === "config" && countActiveRings < 1) wrapSection += ` ${s.control_full}`;
  if (stepConfig === "config" && countActiveRings >= 1) wrapSection += ` ${s.control_config}`;
  if (stepConfig === "basket") wrapSection += ` ${s.control_full}`;

  return (
    <>

      <div className={s.desktop}>

        <div className={s.loaderDesctopImg}>
          <  LoaderDesctop />

        </div>
        <div className={s.controls}>
          <div className={wrapSection}>
            {stepConfig === "config" && <WrapRingSection />}
            {stepConfig === "basket" && <GroupBasket />}
          </div>
          {stepConfig === "config" && countActiveRings >= 1 && <BtnToPreview />}
        </div>
      </div>
      <div className={s.mobil}>
        <div className={s.loaderDesctopImg}>
          <  LoaderMobil />

        </div>

        {setAuxiliaryButtonsActive ? (
          <div className={s.controllsMobile}>
            <AuxiliaryButtonMobile />
            <BtnToPreview setAuxiliaryButtonsActive={setAuxiliaryButtonsActive} />
            <div className={s.wrap_basket}>
              {stepConfig === "basket" && <GroupBasket />}
            </div>
          </div>
        ) : (
          <div className={s.controlls}>
            <div className={wrapSection}>
              {stepConfig === "config" &&
                <>
                  <WrapRingSectionMobile />
                </>}
              {stepConfig === "basket" && <GroupBasket />}
            </div>
            {loadButtonFlag && <NextButton countActiveRings={countActiveRings} />}
            {stepConfig === "config" && countActiveRings >= 1 && <BtnToPreview />}
          </div>
        )}
      </div>



    </>
  );
};
