
import s from "./AuxiliaryButtonMobile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { PlusSVG } from "../../assets/PlusSVG";
import {
  setAddAboveBand,
  setAddBeloweBand,
  setActiveAuxiliaryButtons,
  setTempMobileActive,
  setSection,
  setActiveTypeEngagement,
  setEngagementChosen,
  setStepSectionActiveItem
} from "../../store/actions/Settings";
import {
  getRingsList,
  getSectionIngroup,
  getActiveTypeFlag,
  getSectionNames,
} from "../../store/selectors/selectors";
import { ArrowGroupTop } from "../../assets";

export const AuxiliaryButtonMobile = () => {
  const dispatch = useDispatch();
  const activeRingDataItems = useSelector(getRingsList);
  const sectionGroup = useSelector(getSectionIngroup);
  const isActiveTypeEngagement = useSelector(getActiveTypeFlag);
  const sectionNamesArray = useSelector(getSectionNames);

  const onChangeStepAbove = (index:number) => {
    dispatch(setActiveAuxiliaryButtons(false));
    dispatch(setAddAboveBand())
    dispatch(setTempMobileActive(true));
    dispatch(setSection(index)); 
    dispatch(setStepSectionActiveItem());
        
    if(isActiveTypeEngagement) dispatch(setEngagementChosen(true)); 
  };

  const onChangeStepBelowe = (index:number) => {
    dispatch(setActiveAuxiliaryButtons(false));
    dispatch(setAddBeloweBand());
    dispatch(setTempMobileActive(true));
    dispatch(setSection(index));
    dispatch(setStepSectionActiveItem());

    if(isActiveTypeEngagement) dispatch(setEngagementChosen(true)); 
  };

  const onChangeStep = (index:number) => {
    dispatch(setActiveAuxiliaryButtons(false));
    dispatch(setSection(index));
    
    if(isActiveTypeEngagement && sectionGroup === index) dispatch(setActiveTypeEngagement(false));
  }
  
  return (
    <div>
      {activeRingDataItems &&
        activeRingDataItems.map((item: any) => {
            let classBtn = `${s.btn_wrap}` ;
            const isTempSection = sectionNamesArray.includes(item["name"]);
            
            if(!isTempSection) classBtn += ` ${s.white}`;
          return (
            <div className={classBtn}  
                onClick={sectionNamesArray[0].includes(item["name"]) 
                ? () => onChangeStepAbove(item["index"])
                :sectionNamesArray[1].includes(item["name"])
                ? () => onChangeStepBelowe(item["index"])
                : () => onChangeStep(item["index"])
                }>
              <div className={s.info_section}>
                {isTempSection && <PlusSVG />}
                <span>{item["name"]}</span>
              </div>
              <div className={s.btn_arrow}>
                <ArrowGroupTop />
              </div>
            </div>
          );
        })}
    </div>
  );
};
