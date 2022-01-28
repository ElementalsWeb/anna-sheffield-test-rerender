import React, { useEffect, useState  } from "react";
import { useSelector } from "react-redux";
import s from "./WrapRingSectionMobile.module.scss";
import {
  checkAvailabilityEngagement,
  getActiveGroup,
  getIndexSection,
  getLoadConfig,
  getRingsList,
  getNextButtonTemp,

} from "../../store/selectors/selectors";
import { sectionInterf } from "../../store/interface";
import { RingSection } from "../RingSection/RingSection";


export const WrapRingSectionMobile = ({ ...props }) => {

  const sectionsRings: sectionInterf[] = useSelector(getRingsList);
  const isTempMobileActive = useSelector(getNextButtonTemp);
  const activeGroupInfoState = useSelector(getActiveGroup);
  const availabilityEngagement = useSelector(checkAvailabilityEngagement);
  const activeIndexSection = useSelector(getIndexSection);
  const isLoading: boolean = useSelector(getLoadConfig);
  const [activeGroup, setActiveGroup] = useState(activeGroupInfoState)
  const initVal: any[] = [];
  const elRefs = React.useRef(initVal);



  useEffect(() => {
    setActiveGroup(activeGroupInfoState)
  }, [activeIndexSection, activeGroupInfoState])


  return (
    <>
     
      {isLoading && sectionsRings.map((section: sectionInterf, index) => {

       let sectionGroup = `${s.group}`;
        if (section.index === activeIndexSection)
          sectionGroup += ` ${s.active}`;
        if (["CHOOSE RING OR BAND ABOVE", "CHOOSE RING OR BAND BELOW"].includes(section.name))
          sectionGroup +=isTempMobileActive ? ` ${s.sectionTempMobile}` :` ${s.sectionTemp}`;
        return (
          
          <div ref={el => elRefs.current[index] = el}
            className={sectionGroup}
            key={section.id} >
            <div className={s.group_wrap}> 
              {(!!availabilityEngagement['isCheck'] || availabilityEngagement['section'] === section['name']) && section.groups.length > 0 &&
                section.groups.map((group: any) => {
                  let itemGroup = `${s.item}`;
                  if (activeGroup === group.id) itemGroup += ` ${s.active}`;
                  return (
                    <div
                      key={group.id}
                      onClick={() => setActiveGroup(group.id)}
                      className={itemGroup}
                    >
                      {group.name}
                    </div>
                  );
                })}
            </div>
            <div className={s.group_main}> 
              <RingSection activeGroup={activeGroup} key={`${section.id}-kke`} />
            </div>
          </div>
        );
      })}
    </>
  );
};
