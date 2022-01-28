import { colorInterf, groupMainRing } from "../../utils/commonProperty";
import { bandsRingInterf, engagementRingInterf } from "../../utils/listRing";
 
import { rulesBangStandard, rulesBangNew, rulesEngagement } from "../../utils/rulesRingCopy";
import {
  activeRing,
  sectionInterf,
  stateInterf,
  ThreeKitParams,
  variantRingT,
} from "../interface";

export const getIndexSection = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.interfaceInfo.stepSection;
}
export const getDirectionRing = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.interfaceInfo.directionRing;
}
export const getSizeRing = ({ ...state }) => {
  const Configurations: stateInterf = state['Configurations'];
  return Configurations.interfaceInfo.sizeRing;
}

export const getLoadConfig = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.interfaceInfo.loadConfig;
};

export const getSaveItemInModal = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations["modalInfo"]['savedItem'];
};
export const getWindowWidthMobileFlag = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations["windowWidthMobileFlag"];
}
export const showModal = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations["modalInfo"];
};
export const autoCloseModal = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const modalInfoItems: any = Configurations["modalInfo"];

  for (let prop in modalInfoItems) {
    if (modalInfoItems[prop] === true) {
      return {
        flag: modalInfoItems[prop],
        prop
      };
    }
  }
  return {
    flag: false,
    prop: null,
  };
};
export const getCountActiveRing = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.activeListItem.length;
};
export const getActiveGroup = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const listItem = Configurations["activeListItem"];
  const activeElementIndex = getIndexSection(state);
  const activeRingsLists = getRingsList(state);

  const activeElement = listItem.filter(
    (item) => item["stepSection"] === activeElementIndex
  );
  const activeRingsList = activeRingsLists.filter(
    (item) => item["index"] === activeElementIndex
  )[0];

  if (activeElement.length > 0) {
    return activeElement[0].typeItem;
  }
  if (!!activeRingsList && activeRingsList.groups.length < 2) {
    return activeRingsList.groups[0]['id'];
  }
  if (activeElement.length === 0) {
    return Configurations.interfaceInfo.standartActiveGroup;
  }






  return "bands";
};
export const checkAvailabilityEngagement = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const listItem = Configurations["activeListItem"];
  let countEngagement = listItem.filter((item) => item["typeItem"] === "engagement");
  if (countEngagement.length > 0) {
    return {
      isCheck: false,
      section: countEngagement[0]["name"],
    };
  }
  return {
    isCheck: true,
    section: null,
  };
};
export const getActiveRingInStep = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const listItem = Configurations["activeListItem"];
  const activeStep = Configurations["interfaceInfo"]["stepSection"];
  const activeElement = listItem.filter((item) => item["stepSection"] === activeStep);

  if (activeElement.length > 0) {
    return {
      isSelect: true,
      activeElement: activeElement[0],
    };
  }
  return {
    isSelect: false,
    activeElement: null,
  };
}
export const getAllListRing = (
  state: any,
  activeGroup: groupMainRing
): engagementRingInterf[] | bandsRingInterf[] => {
  const Configurations: stateInterf = state["Configurations"];
  const engagementList: engagementRingInterf[] = Configurations.listRings;
  const bandsList: bandsRingInterf[] = Configurations.listBoatRings;

  switch (activeGroup) {
    case "bands":
      return bandsList;
    default:
      return engagementList;
  }
};
export const getRingSection = (state: any, activeGroup: groupMainRing) => {
  const Configurations: stateInterf = state["Configurations"];
  const countActiveListItem = getCountActiveRing(state);
  const engagementList: engagementRingInterf[] = Configurations.listRings;
  const activeListItemCopy: any = Configurations['activeListItem'];
  const directionRing: any = Configurations.interfaceInfo['directionRing'];
  const selectStep = state['Configurations'].interfaceInfo.stepSection;
  const parentRing = activeListItemCopy.filter((item: any) => item['stepSection'] === selectStep + 1)[0];
  const bandsList: bandsRingInterf[] = Configurations.listBoatRings;
  const isEngagementChosen: any = Configurations['activeListItem'].filter((item: any) => item['typeItem'] === 'engagement');


  if (countActiveListItem < 1) {
    return getAllListRing(state, activeGroup);
  }

  const listItem = Configurations["activeListItem"];
  const activeElementIndex = getIndexSection(state);
  let parenFirstStepElement = 0;
  let parentSeconderStepElement = 0;

  switch (activeElementIndex) {
    case Number(0):
      parenFirstStepElement = activeElementIndex - 1;
      parentSeconderStepElement = activeElementIndex + 1;

      const parenActiveElement: any = listItem.filter(
        (item) => item["stepSection"] === parenFirstStepElement
      );
      const parentSeconderActiveElement = listItem.filter(
        (item) => item["stepSection"] === parentSeconderStepElement
      );

      if (activeGroup === "bands" && !!parenActiveElement[0] && parenActiveElement[0]["typeItem"] === "bands") {
        return searchDepItem(bandsList, rulesBangStandard, parenActiveElement[0]);
      }
      if (activeGroup === "bands" && !!parentSeconderActiveElement[0] && parentSeconderActiveElement[0]["typeItem"] === "bands") {
        return searchDepItem(bandsList, rulesBangNew, parentSeconderActiveElement[0]);
      }

      return getAllListRing(state, activeGroup);
    case Number(-1):
    case Number(-2):
    case Number(-3):
    case Number(-4):
      parenFirstStepElement = activeElementIndex + 1;
      parentSeconderStepElement = activeElementIndex - 1;
      break;
    case Number(1):
    case Number(2):
    case Number(3):
    case Number(4):
      parenFirstStepElement = activeElementIndex - 1;
      parentSeconderStepElement = activeElementIndex + 1;
      break;
  }

  const parenActiveElement: any = listItem.filter(
    (item) => item["stepSection"] === parenFirstStepElement
  );
  const parentSeconderActiveElement = listItem.filter(
    (item) => item["stepSection"] === parentSeconderStepElement
  );

  if (
    activeGroup === "bands" &&
    !!parenActiveElement[0] &&
    parenActiveElement[0]["typeItem"] === "bands"
  ) {
    let isCheckBottomRing = parentSeconderActiveElement.length > 0
    console.log('rings ------------- 111111111111111');

    if (directionRing === 'down' && isEngagementChosen.length < 1 && parenActiveElement[0]['stepSection'] > selectStep) {
      return searchDepItem(bandsList, rulesBangNew, parenActiveElement[0]);
    }
    if (directionRing === 'down' && isEngagementChosen.length > 0 && parenActiveElement[0]['stepSection'] > selectStep) {
      return searchDepItem(bandsList, rulesBangStandard, parenActiveElement[0]);
    }


    return searchDepItem(bandsList, rulesBangStandard, parenActiveElement[0]);
  } else if (
    activeGroup === "bands" &&
    !!parenActiveElement[0] &&
    parenActiveElement[0]["typeItem"] === "engagement"
  ) {
    console.log('rings ------------- 22222222222222222');
    return searchDepItem(bandsList, rulesEngagement, parenActiveElement[0]);

  } else if (
    activeGroup === "bands" &&
    !!parentSeconderActiveElement[0] &&
    parentSeconderActiveElement[0]["typeItem"] === "bands"
  ) {
    console.log('rings ------------- 3333333333333333333333');
    return searchDepItem(bandsList, rulesBangStandard, parentSeconderActiveElement[0]);

  } else if (
    activeGroup === "bands" &&
    !!parentSeconderActiveElement[0] &&
    parentSeconderActiveElement[0]["typeItem"] === "engagement"
  ) {
    console.log('rings ------------- 444444444444444444444');
    return searchDepItem(
      bandsList,
      rulesEngagement,
      parentSeconderActiveElement[0]
    );

  } else if (activeGroup === "bands") {
    console.log('rings ------------- 55555555555555555555555555');
    return bandsList;

  } else if (activeGroup === "engagement" && !!parenActiveElement[0]) {
    console.log('rings ------------- 66666666666666666666666666');
    let allAvailableEngagementId: string[] = [];

    for (const key in rulesEngagement) {
      if (Object.prototype.hasOwnProperty.call(rulesEngagement, key)) {
        if (rulesEngagement[key]?.includes(parenActiveElement[0].name)) {
          allAvailableEngagementId.push(key);
        }
      }
    }
    return engagementList.filter((ring) =>
      allAvailableEngagementId.includes(ring["name"])
    );

  } else if (activeGroup === "engagement" && !!parentSeconderActiveElement[0]) {
    console.log('rings ------------- 77777777777777777777777777');
    let allAvailableEngagementId: string[] = [];

    for (const key in rulesEngagement) {
      if (Object.prototype.hasOwnProperty.call(rulesEngagement, key)) {
        if (
          rulesEngagement[key]?.includes(parentSeconderActiveElement[0].name)
        ) {
          allAvailableEngagementId.push(key);
        }
      }
    }
    return engagementList.filter((ring) =>
      allAvailableEngagementId.includes(ring["name"])
    );

  } else if (
    activeGroup === "engagement" &&
    !parenActiveElement[0] &&
    !parentSeconderActiveElement[0]
  ) {
    console.log('rings ------------- 8888888888888888888888');
    return engagementList;
  }
};

export const getSectionNames = ({ ...state }) => {
  const Configurations: stateInterf = state['Configurations'];
  const sections = Configurations['sections'];
  const sectionNamesArray: any[] = [];

  sectionNamesArray.push(sections['aboveSection']['name'], sections['aboveSection']['nameIsEngagementChosen'],
    sections['belowSection']['name'], sections['belowSection']['nameIsEngagementChosen'])
  return sectionNamesArray;
};

export const getRingsList = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const indexActiveGroup = getIndexSection(state);
  const sectionsRings: sectionInterf[] = [];
  const isEngagementChosen: any = Configurations['activeListItem'].filter((item: any) => item['typeItem'] === 'engagement');

  let boundRingsInDownwardConfig = Object.keys(rulesBangStandard).filter((key: string) => {
    let tempArray: any = rulesBangStandard[key];
    return tempArray.length < 1 && key;
  });
  let boundRingsInUpwardConfig = Object.keys(rulesBangNew).filter((key: string) => {
    let tempArray: any = rulesBangNew[key];
    return tempArray.length < 1 && key;
  });

  const getTiedRingsAbove = ({ configDirection }: any) => ({ item }: any) => {
    const { name, typeItem } = item;
    if (typeItem === 'engagement') return [];
    return configDirection === 'down' ? rulesBangNew[name] : rulesBangStandard[name];
  }

  let configDerections = Configurations['interfaceInfo']['directionRing'];


  if (Configurations.activeListItem.length === 0) {
    let sectionRings: sectionInterf = Configurations.sections.mainSection;
    sectionsRings.push(sectionRings);
  } else {
    let activeListElement = Configurations["activeListItem"].sort(
      (a, b) => a["stepSection"] - b["stepSection"]
    );
    let countActiveElement = activeListElement.length;

    const getActualGroupsAbove = ({ prevItem, section }: any) => {
      const { name, typeItem } = prevItem;


      let listInnerRings: any = rulesBangNew[name];
      let listOuterRings: any = rulesBangStandard[name];

      if (typeItem === 'engagement' && isEngagementChosen.length > 0) {
        // console.log('typeItem ------ 11111111111 ');
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'engagement');
        return section['groups']
      } else if (isEngagementChosen.length > 0 && isEngagementChosen[0]['stepSection'] !== prevItem['stepSection']) {
        // console.log('typeItem ------ 2222222222222222222 ');
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'engagement');
      }


      if (isEngagementChosen.length > 0 && configDerections === 'down' && listOuterRings.length < 1 && isEngagementChosen[0]['stepSection'] > prevItem['stepSection']) {
        // console.log('typeItem ------ 3333333333333333 ');
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'bands')
      } else if (isEngagementChosen.length < 1 && configDerections === 'down' && listInnerRings.length < 1) {
        // } else if (configDerections === 'down' && listInnerRings.length < 1) {
        // console.log('typeItem ------ 44444444444444444444 ');
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'bands')
      } else if (configDerections === 'up' && listOuterRings.length < 1) {
        // если нет елемента для вставки колец при переаертывании конфигурацыи
        // console.log('typeItem ------ 555555555555555 ');
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'bands');
      }


      return section['groups']
    }
    const getActualGroupsBelow = ({ item, section }: any) => {
      const { name, typeItem } = item;

      if (typeItem === 'engagement' && isEngagementChosen.length > 0) {
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'engagement');
        return section['groups']
      }

      if (isEngagementChosen.length > 0) {
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'engagement');
      }

      let listOuterRings: any = rulesBangStandard[name];
      if (isEngagementChosen.length < 1 && configDerections === 'down' && listOuterRings.length < 1) {
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'bands')
      } else if (configDerections === 'up' && listOuterRings.length < 1) {
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'bands')
      }

      return section['groups']
    }
    const getActiveGroups = ({ item, section }: any) => {
      const { name, typeItem } = item;

      if (isEngagementChosen.length > 0 && isEngagementChosen[0]['stepSection'] !== item['stepSection']) {
        section['groups'] = section['groups'].filter((group: any) => group['id'] !== 'engagement');
      }

      return section['groups']
    }

    activeListElement.forEach((item, index) => {
      let isTempAboveSection = index === 0 && countActiveElement < 4
      let isTempBelowSection = countActiveElement - 1 === index && countActiveElement < 4

      if (isTempAboveSection) {
        let sectionAboveBands: sectionInterf = Object.assign({}, Configurations.sections.aboveSection);
        if (isEngagementChosen.length > 0 && sectionAboveBands["nameIsEngagementChosen"]) sectionAboveBands["name"] = sectionAboveBands["nameIsEngagementChosen"];

        sectionAboveBands['groups'] = getActualGroupsAbove({ prevItem: item, section: sectionAboveBands })
        sectionAboveBands["index"] = item["stepSection"] - 1;
        sectionAboveBands["id"] = `section${item["stepSection"] - 1}`;
        sectionAboveBands['groups'].length > 0 && sectionsRings.push(sectionAboveBands);
      }


      if (indexActiveGroup === item.stepSection) {
        let sectionRings: sectionInterf = Object.assign({}, Configurations.sections.mainSection);

        sectionRings['groups'] = getActiveGroups({ item: item, section: sectionRings })
        sectionRings["index"] = item["stepSection"];
        sectionRings["id"] = `section${item["stepSection"]}`;
        sectionRings["name"] = item["name"];

        sectionRings['groups'].length > 0 && sectionsRings.push(sectionRings);
      } else {
        let sectionRings: sectionInterf = Object.assign({}, Configurations.sections.mainSection);

        sectionRings['groups'] = getActiveGroups({ item: item, section: sectionRings })
        sectionRings["index"] = item["stepSection"];
        sectionRings["id"] = `section${item["stepSection"]}`;
        sectionRings["name"] = item["name"];

        sectionRings['groups'].length > 0 && sectionsRings.push(sectionRings);
      }

      if (isTempBelowSection) {
        let sectionBelowBands: any = Object.assign({}, Configurations.sections.belowSection);

        if (isEngagementChosen.length > 0) sectionBelowBands["name"] = sectionBelowBands["nameIsEngagementChosen"];
        sectionBelowBands['groups'] = getActualGroupsBelow({ item: item, section: sectionBelowBands })
        sectionBelowBands["index"] = item["stepSection"] + 1;
        sectionBelowBands["id"] = `section${item["stepSection"] + 1}`;

        sectionBelowBands['groups'].length > 0 && sectionsRings.push(sectionBelowBands);

      }
    });
  }
  return sectionsRings;
};
function searchDepItem(arrayList: any, rulesList: any, item: any) {

  let nameItem: any = rulesList[item["name"]];
  return arrayList.filter((ring: any) => isInArray(nameItem, ring.name));
}
function isInArray(array: string[], item: any) {
  return array.indexOf(item) > -1;
}
export const getActiveRing = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const activeStep = Configurations["interfaceInfo"]["stepSection"];
  const activeRing = Configurations["activeListItem"].filter(
    (ring) => ring.stepSection === activeStep
  )[0];

  return !!activeRing ? activeRing : null;
};
export const getColor = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.commonParams.listColors;
};
export const getCarats = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  return Configurations.commonParams.listCarats;
};
export const getPriceRingSelector = ({ ...props }: any) => ({ ...state }) => {
  let { itemId, defaultIdColor, isActive } = props
  const colors = getColor(state);
  const listPrice = state["Configurations"]['listPrice'];
  const activeListItems = getActiveListItems(state);

  const sizeRing: any = getSizeRing(state);



  if (activeListItems && isActive) {
    let activeItem = activeListItems.filter((activeItem: any) => activeItem['ringActive'] === itemId)[0]
    let activeColor: colorInterf = colors.filter((color: colorInterf) => color['id'] === activeItem['activeColor'])[0];

    let nameAndSize: any = `${activeColor['nameConfig']} / ${sizeRing['label']}`;
    if (listPrice[itemId]) {
      let price = listPrice[itemId][nameAndSize]
      // debugger
      return price;
    }
    return `0000.000`;
  }

  if (listPrice[itemId]) {
    let activeColor: colorInterf = colors.filter((color: colorInterf) => color['id'] === defaultIdColor)[0];

    let nameAndSize: any = `${activeColor['nameConfig']} / ${sizeRing['label']}`;
    let price = listPrice[itemId][nameAndSize]
    return price;
  }

  return `0000.000`;
};
export const getActiveRingCarats = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const indexActiveGroup = getIndexSection(state);
  if (Configurations["activeListItem"].length < 1) return null;

  const activeItem = Configurations["activeListItem"].filter(
    (item: activeRing) => item["stepSection"] === indexActiveGroup
  )[0];
  if (!!activeItem && !!activeItem["activeCarat"])
    return activeItem["activeCarat"];
  return null;
};

export const getActiveRingCaratsMobile = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const indexActiveGroup = getIndexSection(state);
  if (Configurations["activeListItem"].length < 1) return null;

  const activeItem = Configurations["activeListItem"].filter(
    (item: activeRing) => item["stepSection"] === indexActiveGroup
  )[0];
  if (!!activeItem && !!activeItem["activeCarat"])
    return activeItem["activeCarat"];
  return null;
};
export const getActiveRingTypeMobile = ({ ...state }) => {
  const Configurations = state["Configurations"];
  if (Configurations["activeListItem"].length < 1) return null;
  const activeType = Configurations["activeListItem"].filter(
    (item: any) => item["typeItem"]
  )[0];
  return activeType["typeItem"];
};
export const getActiveRingColor = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const indexActiveGroup = getIndexSection(state);
  if (Configurations["activeListItem"].length < 1) return null;
  const activeItem = Configurations["activeListItem"].filter(
    (item: activeRing) => item["stepSection"] === indexActiveGroup
  )[0];
  if (!!activeItem && !!activeItem["activeColor"])
    return activeItem["activeColor"];
  return null;
};

export const getActiveRingColorMobile = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let stepperSection: any = Configurations["interfaceInfo"]["stepSection"];
  if (Configurations["activeListItem"].length < 1) return null;
  const activeItem = Configurations["activeListItem"].filter(
    (item: activeRing) => item["stepSection"] === stepperSection
  )[0];
  return activeItem;
};
export const getNextButtonFlag = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let flag: boolean =
    Configurations["nextButtonFlag"]["isAuxiliaryButtonsActive"];
  return flag;
};
export const getEngagementFlag = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let flag: boolean = Configurations["nextButtonFlag"]["isEngagementChosen"];
  return flag;
};
export const getActiveTypeFlag = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let flag: boolean = Configurations["nextButtonFlag"]["isActiveType"];
  return flag;
};
export const getActiveSectionInGroup = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const activeSectionInGroup = Configurations["activeSectionInGroup"];

  return activeSectionInGroup;
};
export const getActiveSectionIngroup = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const activeSectionInGroup = Configurations["activeSectionInGroup"];
  let idSection: string;
  let flag: boolean = false;
  for (let c = 0; c < activeSectionInGroup.length; c++) {
    idSection = activeSectionInGroup[c]["idSection"];
    if (idSection === "engagement") flag = true;
  }
  return flag;
};
export const getSectionIngroup = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const activeSectionInGroup: any = Configurations["activeSectionInGroup"];
  for (let c = 0; c < activeSectionInGroup.length; c++) {
    if (activeSectionInGroup[c]["idSection"] === "engagement") {
      return activeSectionInGroup[c]["indexSection"];
    }
  }
  return null;
};
export const getNextButtonTemp = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let flag = Configurations["nextButtonFlag"]["isTempMobileActive"];
  return flag;
};
export const getActiveListItems = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  if (Configurations["activeListItem"].length < 1) return null;
  return Configurations["activeListItem"];
};
export const getRingItemDataMobile = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let section = Configurations["interfaceInfo"]["stepSection"];
  if (Configurations["activeListItem"].length < 1) return null;
  let activeData = [];
  activeData.push(
    Configurations["activeListItem"].filter(
      (item: activeRing) => item["stepSection"] === section
    )[0]
  );
  return activeData;
};
export const getStartThreekit = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let startThreekit = Configurations["interfaceInfo"]["startThreekit"];
  return startThreekit;
};
export const getSaveUrlConfig = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let stepConfig = Configurations["interfaceInfo"]["saveUrlConfig"];
  return stepConfig;
};
export const getStepConfig = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let stepConfig = Configurations["interfaceInfo"]["stepConfig"];
  return stepConfig;
};
export const getParamsSaveConfiguration = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let interfaceInfo = Configurations["interfaceInfo"];
  let activeListItem = Configurations["activeListItem"];
  return { interfaceInfo, activeListItem };
};

// // main Ring
export const getActiveListElement = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let activeListElement = JSON.parse(
    JSON.stringify(Configurations["activeListItem"])
  ).sort((a: any, b: any) => a["stepSection"] - b["stepSection"]);
  activeListElement = activeListElement.map((item: activeRing) => {
    let listBoatRings = Configurations["listBoatRings"];
    let listRings = Configurations["listRings"];
    let props = {};
    let activeElement: any = [];

    if (activeElement.length < 1) {
      activeElement = listBoatRings.filter(
        (boat) => boat["id"] === item["ringActive"]
      );
    }
    if (activeElement.length < 1) {
      activeElement = listRings.filter(
        (boat) => boat["id"] === item["ringActive"]
      );
    }

    if (!!item["activeCarat"]) {
      let infoCarats = Configurations["commonParams"]["listCarats"].filter(
        (carets) => carets["id"] === item["activeCarat"]
      )[0];
      props = { ...props, activeCarat: infoCarats };
    }
    if (!!item["activeColor"]) {
      let infoColor = Configurations["commonParams"]["listColors"].filter(
        (carets) => carets["id"] === item["activeColor"]
      )[0];
      props = { ...props, activeColor: infoColor };
    }

    return {
      itemState: item,
      item: activeElement[0],
      ...props,
    };
  });

  return activeListElement;
};


export const getActiveListTreeKitInfo = ({ ...state }) => {

  const Configurations: stateInterf = state["Configurations"];
  let threeKitParamsArray: ThreeKitParams[];
  let activeListElement = JSON.parse(
    JSON.stringify(Configurations["activeListItem"])
  ).sort((a: any, b: any) => a["stepSection"] - b["stepSection"]);
  let listColors = Configurations["commonParams"]["listColors"];
  let listBoatRings = Configurations["listBoatRings"];
  let listRings = Configurations["listRings"];
  let isEngagement: activeRing[] = activeListElement.filter(
    (item: activeRing, index: number) => item["typeItem"] === "engagement"
  );


  let ringPrew = 0;
  let ringNext = 2;

  threeKitParamsArray = activeListElement.reverse().map((item: activeRing, index: number) => {

    let direction = `Down`;
    let nameItem: string;
    let activeElement: engagementRingInterf[] | bandsRingInterf[] | [] = [];
    if (activeElement.length < 1) {
      activeElement = listBoatRings.filter(
        (boat) => boat["id"] === item["ringActive"]
      );
    }
    if (activeElement.length < 1) {
      activeElement = listRings.filter(
        (boat) => boat["id"] === item["ringActive"]
      );
    }
    let activeColor: colorInterf = listColors.filter(
      (color) => color["id"] === item["activeColor"]
    )[0];
    if (
      isEngagement.length > 0 &&
      item["stepSection"] < isEngagement[0]["stepSection"]
    ) {
      direction = `Up`;
    }
    nameItem =
      item["typeItem"] !== "engagement"
        ? `${activeElement[0]["valueConfig"]}_Pos_${index + 1}_${direction}`
        : `${activeElement[0]["valueConfig"]}_Pos_${index + 1}`;


    let positionRing = 0;

    if (isEngagement.length > 0) {
      let stepSectionEngagement = isEngagement[0]['stepSection'];
      if (Number(stepSectionEngagement) < Number(item['stepSection'])) {
        positionRing = JSON.parse(JSON.stringify(ringPrew));
        ringPrew += 1;
      } else if (Number(stepSectionEngagement) > Number(item['stepSection'])) {
        positionRing = JSON.parse(JSON.stringify(ringNext));
        ringNext -= 1;
      } else {
        positionRing = 3;
      }
    } else {
      positionRing += index;
    }


    console.log('positionRing = ', positionRing);

    return {
      name: activeElement[0]["valueConfig"],
      position: `Position ${index + 1}`,
      position_short: `Pos_${index + 1}`,
      colorName: activeColor["nameConfig"],
      directionConfig: direction,
      nameAttribute: nameItem,
      positionRingThreeKit: positionRing,
    };
  });

  return {
    activeElement: threeKitParamsArray,
  };
};
export const getAllPriceActiveListElement = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let activeListElement = JSON.parse(JSON.stringify(Configurations["activeListItem"]));
  if (activeListElement.length > 0) {


    const colors: any = getColor(state);
    const sizeRing: any = getSizeRing(state);
    const listPrice = state["Configurations"]['listPrice'];




    let AllPrice: number = 0;
    activeListElement.forEach((activeItem: any) => {
      console.log(activeItem);
      let activeColor: colorInterf = colors.filter((color: colorInterf) => color['id'] === activeItem['activeColor'])[0];

      if (listPrice[activeItem['ringActive']]) {
        let nameAndSize: any = `${activeColor['nameConfig']} / ${sizeRing['label']}`;
        let price: variantRingT = listPrice[activeItem['ringActive']][nameAndSize]

        AllPrice = AllPrice + Number(price['price'])
      }
      AllPrice = AllPrice + 0
    })
    return String(AllPrice);

  } else {
    return String(0);
  }
};
export const isCheckEngagement = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  const listItem = Configurations["activeListItem"];
  let countEngagement = listItem.filter(
    (item) => item["typeItem"] === "engagement"
  );
  if (countEngagement.length > 0) {
    return { isCheck: true, stepSection: countEngagement[0]["stepSection"] };
  }
  return { isCheck: false, stepSection: null };
}
export const getRotationInfo = ({ ...state }) => {
  const Configurations: stateInterf = state["Configurations"];
  let listRotation = Configurations['rotationAngle'];

  return listRotation;
}


export const getAllRingForBasket = ({ ...state }) => {
  const Configurations: stateInterf = state['Configurations'];
  let activeListElement = JSON.parse(JSON.stringify(Configurations['activeListItem'])).sort((a: any, b: any) => a['stepSection'] - b['stepSection']);

  type countActiveRingT = {
    key: string,
    quantity: number,
  }

  let basketData: countActiveRingT[] = []

  activeListElement = activeListElement.map((item: activeRing) => {

    let variantRing: variantRingT = getPriceRingSelector({ itemId: item['ringActive'], defaultIdColor: item['activeColor'], isActive: true })(state)

    if (!!variantRing) {

      let activeRing = basketData.filter(item => item['key'] === variantRing['id']);

      if (activeRing.length < 1) {
        basketData.push({ "key": variantRing['id'], quantity: 1 })
      } else {
        let ring = basketData.filter(item => item['key'] === variantRing['id']);
        ring[0]['quantity']++
      }
    }

    let listBoatRings: bandsRingInterf[] = Configurations['listBoatRings'];
    let listRings: engagementRingInterf[] = Configurations['listRings'];

    let activeElement: any = [];

    if (activeElement.length < 1) {
      activeElement = listBoatRings.filter(boat => boat['id'] === item['ringActive']);
    }
    if (activeElement.length < 1) {
      activeElement = listRings.filter(boat => boat['id'] === item['ringActive']);
    }


    return activeElement
  })





  return {
    activeListElement,
    basketData,
  };
};
