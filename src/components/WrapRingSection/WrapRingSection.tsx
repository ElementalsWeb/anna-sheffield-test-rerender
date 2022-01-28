import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowGroupTop } from "../../assets";
import s from "./WrapRingSection.module.scss";
import {
  checkAvailabilityEngagement,
  getActiveGroup,
  getIndexSection,
  getLoadConfig,
  getRingsList,
  getNextButtonTemp,
  getWindowWidthMobileFlag,
  getSectionNames,

} from "../../store/selectors/selectors";
import {
  setSection, setStepSectionActiveItem, setWindowWidthMobileFlag,
} from "../../store/actions/Settings";
import { sectionInterf } from "../../store/interface";

import { useLayoutEffect } from "react";
import { RingSection } from "../RingSection/RingSection";

export const WrapRingSection = ({ ...props }) => {

  let windowWidth: number;

  const sectionsRings: sectionInterf[] = useSelector(getRingsList);
  const isTempMobileActive = useSelector(getNextButtonTemp);
  const activeGroupInfoState = useSelector(getActiveGroup);
  const availabilityEngagement = useSelector(checkAvailabilityEngagement);
  const activeIndexSection = useSelector(getIndexSection);
  const isLoading: boolean = useSelector(getLoadConfig);
  const [activeGroup, setActiveGroup] = useState(activeGroupInfoState)
  const initVal: any[] = [];
  const sectionNamesArray = useSelector(getSectionNames);
  const elRefs = React.useRef(initVal);
  const getMobileWidthFlag = useSelector(getWindowWidthMobileFlag);
  const dispatch = useDispatch();

  const onChangeStep = (sectionIndex: number) => {
    dispatch(setSection(sectionIndex));
    dispatch(setStepSectionActiveItem());
  };

  useEffect(() => {
    handleWindowWidth();
    window.addEventListener('resize', handleWindowWidth);
  }, []);

  const handleWindowWidth = () => {

    windowWidth = window.innerWidth;

    if (windowWidth < 993) {
      dispatch(setWindowWidthMobileFlag(true));
    }
    else {
      dispatch(setWindowWidthMobileFlag(false));
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', () => getMobileWidthFlag && wrapSectionResizeDesktop(elRefs));
    const wrapSectionResizeDesktop = (ref: any) => {
      const groupList = ref.current;

      let heightDisableGroups: number = 0;
      let activeGroup = groupList.filter((item: any) => !!item && item.className.includes('RingSection_active'));
      let noGroup = groupList.filter((item: any) => !!item && !item.className.includes('RingSection_active'));
      console.log(activeGroup)

      if (noGroup.length > 0 && activeGroup.length > 0) {
        const heightDisableGroup = noGroup[0].offsetHeight;
        heightDisableGroups = noGroup.length * heightDisableGroup;
        let parentNodeHeight = activeGroup[0].parentNode.offsetHeight;
        groupList.forEach((section: any) => {
          if (!!section) {
            section.style.maxHeight = `${parentNodeHeight - heightDisableGroups}px`
          }
        })
      }
    }
    wrapSectionResizeDesktop(elRefs);
  }, [sectionsRings]);

  useEffect(() => {

    setActiveGroup(activeGroupInfoState)
  }, [activeIndexSection, activeGroupInfoState, sectionsRings])



  function headerSection(section: any) {
    return (<div className={s.group_header} onClick={() => onChangeStep(section.index)} >
      <div className={s.info}>
        <div className={s.name}>{section.name}</div>
      </div>
      <div className={s.icon}> <ArrowGroupTop /> </div>
    </div>)
  }

  function showingGroups(section: any) {
    return section.groups.map((group: any) => {

      let itemGroup = `${s.item}`;
      if (activeGroup === group.id) itemGroup += ` ${s.active}`;

      return (
        <div key={group.id} onClick={() => setActiveGroup(group.id)} className={itemGroup}>
          {group.name}
        </div>
      );
    })
  }

  return (
    <>
      {isLoading && sectionsRings.map((section: sectionInterf, index) => {

        let sectionGroup = `${s.group}`;
        if (section.index === activeIndexSection) sectionGroup += ` ${s.active}`;

        if (sectionNamesArray.includes(section.name)) sectionGroup += getMobileWidthFlag && isTempMobileActive ? ` ${s.sectionTempMobile}` : ` ${s.sectionTemp}`;
    ;

        // let isShowingGroups = (!!availabilityEngagement['isCheck'] || availabilityEngagement['section'] === section['name']) && section.groups.length > 1 && section.groups[0]['id'] !== 'engagement';
        let isShowingGroups = section.groups.length > 1;
        return (

          <div ref={el => elRefs.current[index] = el} className={sectionGroup} key={section.id} >
            {headerSection(section)}
            <div className={s.group_wrap}> {(isShowingGroups && showingGroups(section))} </div>
            <div className={s.group_main}> <RingSection activeGroup={activeGroup} key={`${section.id}-kke`} /> </div>
          </div>
        );
      })}
    </>
  );
};
