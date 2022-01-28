import { TYPE_REDUCER } from "../../utils/constants";
import { listEngagementRing, listRingBands } from '../../utils/listRing'
import { colors, carats, listGroup, sectionRing } from "../../utils/commonProperty";
 
import { rulesBangStandard, rulesBangNew, rulesEngagement } from "../../utils/rulesRingCopy";
import { stateInterf, activeRing, SectionIndexType } from "../interface";
import { getRotationAngles } from "../../threekit/rotation2DPhoto";




const initialState: stateInterf = {

  rotationAngle: [0],
  listRings: listEngagementRing,
  listBoatRings: listRingBands,
  commonParams: {
    listColors: colors,
    listCarats: carats,
    listGroup: listGroup
  },
  sections: {
    aboveSection: {
      name: 'CHOOSE RING ',
      nameIsEngagementChosen: 'CHOOSE BAND ABOVE',
      id: 'aboveSection',
      index: -1,
      groups: listGroup,
      items: []
    },
    mainSection: {
      name: 'FIRST RING OR BAND',
      id: 'main_section',
      index: 0,
      groups: listGroup,
      items: []
    },
    belowSection: {
      name: 'CHOOSE RING ',
      nameIsEngagementChosen: 'CHOOSE BAND BELOW',
      id: 'belowSection',
      index: 1,
      groups: listGroup,
      items: []
    },
  },
  listPrice: [],
  rulesRing: rulesEngagement,
  rulesBoatRingsStandard: rulesBangStandard,
  rulesBoatRingsNew: rulesBangNew,
  activeListItem: [],
  activeSectionInGroup: [{
    indexSection: 0,
    idSection: "engagement",
  }],
  interfaceInfo: {
    stepSection: 0,
    stepConfig: "config",
    standartActiveGroup: "bands",
    ringCount: 0,
    belowRingCount: 0,
    aboveRingCount: 0,
    loadConfig: false,
    saveUrlConfig: '',
    startThreekit: {
      "Position 1 Metal": {
        "assetId": "edc5a487-471c-41b4-80a1-8d0d9cb17cf7",
        "configuration": "",
        "type": "item"
      },
      "Position 2 Metal": {
        "assetId": "edc5a487-471c-41b4-80a1-8d0d9cb17cf7",
        "configuration": "",
        "type": "item"
      },
      "Position 3 Metal": {
        "assetId": "edc5a487-471c-41b4-80a1-8d0d9cb17cf7",
        "configuration": "",
        "type": "item"
      },
      "Position 4 Metal": {
        "assetId": "edc5a487-471c-41b4-80a1-8d0d9cb17cf7",
        "configuration": "",
        "type": "item"
      },
      "Position 1": {
        "assetId": "1b280cea-9e0d-4dd1-b412-e30292240983",
        "configuration": "",
        "type": "item"
      },
      "Position 2": {
        "assetId": "1b280cea-9e0d-4dd1-b412-e30292240983",
        "configuration": "",
        "type": "item"
      },
      "Position 3": {
        "assetId": "1b280cea-9e0d-4dd1-b412-e30292240983",
        "configuration": "",
        "type": "item"
      },
      "Position 4": {
        "assetId": "1b280cea-9e0d-4dd1-b412-e30292240983",
        "configuration": "",
        "type": "item"
      },
      "Rotation Angle": 0,
      "Position 1 Order": 0,
      "Position 2 Order": 1,
      "Position 3 Order": 2,
      "Position 4 Order": 3
    },
    sizeRing: { value: "size_3", label: "3" },
    rotationCurrentStep: 0,
    directionRing: 'down',
  },
  modalInfo: {
    modalDropHintModal: false,
    modalRemove: false,
    modalShare: false,
    modalRemoveRing: false,
    modalSelectAnotherRing: false,
    modalRemoveRingQuestion: false,
    savedItem: {},
    stepSectionActiveItem: {},
  },
  nextButtonFlag: {
    isAuxiliaryButtonsActive: false,
    isTempMobileActive: false,
    isEngagementChosen: false,
    isActiveType: false,
  },
  windowWidthMobileFlag: false,
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {


    case TYPE_REDUCER.SET_MAIN_RING:
      {
        const { activeGroup, item } = action.payload;
        const activeStep = state.interfaceInfo.stepSection;
        const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));


        let activeListItem = activeListItemCopy.filter(ring => ring.stepSection !== activeStep)

        let newItem: activeRing = {
          name: item.name,
          ringActive: item.id,
          typeItem: activeGroup,
          activeColor: item.colors[0],
          activeCarat: !!item?.carats ? item.carats[0] : null,
          stepSection: activeStep,
        }
        activeListItem.push(newItem);


        const activeSectionInGroupCopy: sectionRing[] = JSON.parse(JSON.stringify(state.activeSectionInGroup));
        let activeSectionInGroup = activeSectionInGroupCopy.filter(item => item['indexSection'] !== activeStep)

        let newSection: sectionRing = {
          idSection: activeGroup,
          indexSection: activeStep,
        }
        activeSectionInGroup.push(newSection);
        return {
          ...state,
          activeListItem: activeListItem,
          activeSectionInGroup: activeSectionInGroup
        };
      }
    case TYPE_REDUCER.SET_MAIN_RING_WITH_ROTATION:
      {
        let bandsStepSectionsArray: number[] = [];
        const { activeGroup, item } = action.payload;
        const activeStep = state.interfaceInfo.stepSection;
        const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));

        const getBandsStepSections = () => {

          activeListItemCopy.forEach((item: any) => {
            bandsStepSectionsArray.push(item['stepSection']);
          });
          bandsStepSectionsArray.reverse();

          let counter: number = bandsStepSectionsArray.length - 1;

          activeListItemCopy.reverse().forEach((item: any) => {
            item['stepSection'] = bandsStepSectionsArray[counter];
            counter--;
          });
        }

        getBandsStepSections();

        let newActiveListItem = activeListItemCopy.sort((a: any, b: any) => b['stepSection'] - a['stepSection']);

        let newItem: activeRing = {
          name: item.name,
          ringActive: item.id,
          typeItem: activeGroup,
          activeColor: item.colors[0],
          activeCarat: !!item?.carats ? item.carats[0] : null,
          stepSection: activeStep,
        }
        newActiveListItem.push(newItem);

        const activeSectionInGroupCopy: sectionRing[] = newActiveListItem.map((item: activeRing) => {

          return {
            indexSection: item['stepSection'],
            idSection: item['typeItem']
          }
        });
        return {
          ...state,
          activeListItem: newActiveListItem,
          activeSectionInGroup: activeSectionInGroupCopy,
          interfaceInfo: {
            ...state.interfaceInfo,
            directionRing: 'up'
          }
        };
      }

    case TYPE_REDUCER.REMOVE_MAIN_RING_WITH_ROTATION: {

      const { itemStateActive } = action.payload;
      let activeStep: SectionIndexType = state.interfaceInfo.stepSection;

      if (!!itemStateActive) {
        activeStep = itemStateActive['stepSection']
      }

      const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));
      const activeListItem = activeListItemCopy.filter(ring => ring['stepSection'] !== activeStep);
      let activeListItemCopy2: any = JSON.parse(JSON.stringify(activeListItem));
      let bandsStepSectionsArray: number[] = [];
      const newFirstStepEl = activeListItemCopy2[0]['stepSection'];
      const newLastStepEl = activeListItemCopy2[activeListItemCopy2.length - 1]['stepSection'];

      if (+newFirstStepEl !== 0 && +newLastStepEl !== 0) {

        if (+newFirstStepEl < 0 && +newLastStepEl < 0) {
          activeListItemCopy2 = activeListItemCopy2.map((item: any) => {
            let itemCopy = Object.assign({}, item)
            itemCopy['stepSection'] = Number(itemCopy['stepSection']) + 1;
            return itemCopy;
          })
        } else if (+newFirstStepEl > 0 && +newLastStepEl > 0) {
          activeListItemCopy2 = activeListItemCopy2.map((item: any) => {
            let itemCopy = Object.assign({}, item)
            itemCopy['stepSection'] = Number(itemCopy['stepSection']) - 1;
            return itemCopy;
          })
        }
      }

      const getBandsStepSections = () => {

        activeListItemCopy.forEach((item: any) => {
          bandsStepSectionsArray.push(item['stepSection']);
        });
        bandsStepSectionsArray.reverse();

        let counter: number = bandsStepSectionsArray.length - 1;

        activeListItemCopy2.reverse().forEach((item: any) => {

          item['stepSection'] = bandsStepSectionsArray[counter];
          counter--;

        });
      }

      getBandsStepSections();

      let newActiveListItem = activeListItemCopy2.sort((a: any, b: any) => b['stepSection'] - a['stepSection']);

      return {
        ...state,
        activeListItem: newActiveListItem,
        interfaceInfo: {
          ...state.interfaceInfo,
          directionRing: 'down'
        }
      };
    }

    case TYPE_REDUCER.SET_COLOR_RING:
      {
        const { color, item } = action.payload;
        const activeStep = state.interfaceInfo.stepSection;

        const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));

        let activeListItem = activeListItemCopy.filter(ring => ring.ringActive === item['id'] && ring['stepSection'] === activeStep)


        if (activeListItem.length > 0) {
          activeListItem[0]['activeColor'] = color['id'];
        }

        return {
          ...state,
          activeListItem: activeListItemCopy,
        };
      }

    case TYPE_REDUCER.SET_CARAT_RING:
      {
        const { carat, item } = action.payload;
        const activeStep = state.interfaceInfo.stepSection;
        const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));
        let activeListItem = activeListItemCopy.filter(ring => ring.ringActive === item['id'] && ring['stepSection'] === activeStep)

        if (activeListItem.length > 0) {
          activeListItem[0]['activeCarat'] = carat['id'];
        }

        return {
          ...state,
          activeListItem: activeListItemCopy,
        };
      }

    case TYPE_REDUCER.SHOW_MODALS: {

      const itemStateActive = state.interfaceInfo['stepConfig'] === 'config' ? state.interfaceInfo : state.modalInfo.savedItem.itemStateActive;
      const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));
      if (activeListItemCopy.length > 1 && !!itemStateActive) {
        let activeListElement = activeListItemCopy.sort((a, b) => a['stepSection'] - b['stepSection']);
        let firstItemStep = activeListElement[0]['stepSection'];
        let lastItemStep = activeListElement[activeListItemCopy.length - 1]['stepSection'];

        if (firstItemStep < itemStateActive.stepSection && itemStateActive.stepSection < lastItemStep) {
          return {
            ...state,
            modalInfo: {
              ...state['modalInfo'],
              modalRemoveRing: true,
            }
          }
        }
        else if (firstItemStep === itemStateActive.stepSection || itemStateActive.stepSection === lastItemStep) {

          return {
            ...state,
            modalInfo: {
              ...state['modalInfo'],
              modalRemoveRingQuestion: true,
            }
          }
        }
      }
      return state;
    };
    case TYPE_REDUCER.SET_SAVED_MODAL_ITEM: {

      return {
        ...state,
        ...state.modalInfo,
        modalInfo: {
          ...state.modalInfo.savedItem,
          savedItem: action.payload,
        }
      }
    }
    case TYPE_REDUCER.SET_REVERSED_RING_LIST: {
      console.log('payload', action.payload);

      return {
        ...state,
        activeListItem: action.payload,
      }
    }
    case TYPE_REDUCER.REMOVE_SIDE_RING: {
      let activeStep = state.interfaceInfo['stepConfig'] === 'basket' ? state.modalInfo.savedItem.stepSection : state.interfaceInfo.stepSection;

      const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));

      const elementsAfterRemove = activeListItemCopy.filter((item) => item['stepSection'] !== activeStep);

      return {
        ...state,
        ...state.activeListItem,
        activeListItem: elementsAfterRemove,
      }
    }

    case TYPE_REDUCER.MODAL_SELECT_ANOTHER_RING_RESET: {

      return {
        ...state,
        modalInfo: {
          ...state.modalInfo,
          modalSelectAnotherRing: action.payload,
        }
      }
    }
    case TYPE_REDUCER.SET_SELECTED_ITEM: {

      return state;
    }
    case TYPE_REDUCER.MODAL_RESET_CONFIG_AND_SAVE_ITEM: {

      let saveItem: activeRing = state.modalInfo.savedItem;
      let activeSectionInGroup = [{
        idSection: saveItem.typeItem,
        indexSection: saveItem.stepSection
      }]
      return {
        ...state,
        activeListItem: [saveItem],
        activeSectionInGroup: activeSectionInGroup,
        modalInfo: {
          ...state.modalInfo,
          savedItem: {}
        },
        interfaceInfo: {
          ...state.interfaceInfo,
          stepSection: 0,
          stepConfig: 'config'
        },
      }
    }
    case TYPE_REDUCER.SET_REMOTE_RING:
      {
        const { itemStateActive } = action.payload;
        let activeStep: SectionIndexType = state.interfaceInfo.stepSection;

        if (!!itemStateActive) {
          activeStep = itemStateActive['stepSection']
        }

        const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state.activeListItem));

        let activeListItem = activeListItemCopy.filter(ring => ring['stepSection'] !== activeStep);
        if (activeListItem.length < 1) {
          return {
            ...state,
            activeListItem: [],
            interfaceInfo: {
              ...state.interfaceInfo,
              stepSection: 0,
              stepConfig: 'config'
            }
          };
        }

        let activeListItemCopy2: any = JSON.parse(JSON.stringify(activeListItem))
        let newFirststepEl = activeListItemCopy2[0]['stepSection'];
        let newLasttstepEl = activeListItemCopy2[activeListItemCopy2.length - 1]['stepSection'];

        if (+newFirststepEl !== 0 && +newLasttstepEl !== 0) {

          if (+newFirststepEl < 0 && +newLasttstepEl < 0) {
            activeListItemCopy2 = activeListItemCopy2.map((item: any) => {
              let itemCopy = Object.assign({}, item)
              itemCopy['stepSection'] = Number(itemCopy['stepSection']) + 1;
              return itemCopy;
            })
          } else if (+newFirststepEl > 0 && +newLasttstepEl > 0) {
            activeListItemCopy2 = activeListItemCopy2.map((item: any) => {
              let itemCopy = Object.assign({}, item)
              itemCopy['stepSection'] = Number(itemCopy['stepSection']) - 1;
              return itemCopy;
            })
          }
        }

        return {
          ...state,
          activeListItem: activeListItemCopy2,
        };
      }
    case TYPE_REDUCER.SET_SECTION:
      {
        const indexSection = action.payload;
        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            stepSection: indexSection,
            standartActiveGroup: 'bands'
          }
        };
      }

    case TYPE_REDUCER.SET_ADD_ABOVE:
      {

        let activeListItemCopy = JSON.parse(JSON.stringify(state['activeListItem']))
        let countActiveElement = activeListItemCopy.length;

        if (countActiveElement > 1) {
          activeListItemCopy = activeListItemCopy.sort((a: any, b: any) => a['stepSection'] - b['stepSection']);
          let nextStep = activeListItemCopy[0]['stepSection'] - 1;
          return {
            ...state,
            interfaceInfo: {
              ...state.interfaceInfo,
              stepSection: nextStep,
              standartActiveGroup: 'bands'
            }
          };
        }
        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            stepSection: -1,
            standartActiveGroup: 'bands'
          }
        };
      }

    case TYPE_REDUCER.SET_ADD_BELOW:
      {

        let activeListItemCopy = JSON.parse(JSON.stringify(state['activeListItem']))
        let countActiveElement = activeListItemCopy.length;

        if (countActiveElement > 1) {
          activeListItemCopy = activeListItemCopy.sort((a: any, b: any) => a['stepSection'] - b['stepSection']);
          let nextStep = activeListItemCopy[countActiveElement - 1]['stepSection'] + 1;
          return {
            ...state,
            interfaceInfo: {
              ...state.interfaceInfo,
              stepSection: nextStep,
              standartActiveGroup: 'bands'
            }
          };
        }
        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            stepSection: 1,
            standartActiveGroup: 'bands'
          }
        };

      }

    case TYPE_REDUCER.RESET_CONFIG:
      return {
        ...state,
        activeListItem: [],
        activeSectionInGroup: [
          {
            idSection: "engagement",
            indexSection: 0
          },
        ],
        interfaceInfo: {
          ...state.interfaceInfo,
          stepSection: 0,
          stepConfig: 'config',
          directionRing: 'down'
        }
      };

    case TYPE_REDUCER.SET_STEP_CONFIG:
      {
        const step = action.payload;

        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            stepConfig: step
          },
        };
      }
    case TYPE_REDUCER.CLOSE_MODAL:
      {
        const idModal = action.payload;

        return {
          ...state,
          modalInfo: {
            ...state.modalInfo,
            [idModal]: false,
          },
        };
      }
    case TYPE_REDUCER.LOAD_CONFIG:
      {

        const { listPrice } = action.payload;




        return {
          ...state,
          listPrice: listPrice,

          interfaceInfo: {
            ...state.interfaceInfo,
            loadConfig: true,

          },
        };
      }
    case TYPE_REDUCER.SET_STANDART_GROUP:
      {

        let { type } = action.payload;
        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            standartActiveGroup: type,

          },
        };
      }
    case TYPE_REDUCER.SET_URL_CONFIG:
      {

        let { saveConfig, nameModal } = action.payload;
        return {
          ...state,
          interfaceInfo: {
            ...state.interfaceInfo,
            saveUrlConfig: saveConfig,
          },
          modalInfo: {
            ...state.modalInfo,
            [nameModal]: true,
          },
        };
      }

    case TYPE_REDUCER.SET_ACTIVE_AUXILIARY_BUTTONS: {
      return {
        ...state,
        nextButtonFlag: {
          ...state.nextButtonFlag,
          isAuxiliaryButtonsActive: action.payload,
        }
      }
    }
    case TYPE_REDUCER.SET_WINDOW_WIDTH_MOBILE_FLAG: {

      return {
        ...state,
        windowWidthMobileFlag: action.payload,
      }
    }
    case TYPE_REDUCER.SET_TEMP_MOBILE_ACTIVE: {
      return {
        ...state,
        nextButtonFlag: {
          ...state.nextButtonFlag,
          isTempMobileActive: action.payload,
        }
      }
    }
    case TYPE_REDUCER.SET_SHARED_INFO: {
      let { metadata, variant } = action.payload;
      return {
        ...state,
        activeListItem: metadata['activeListItem'],
        interfaceInfo: {
          ...state.interfaceInfo,
          ...metadata['interfaceInfo'],
          startThreekit: variant,
        }
      }
    }
    case TYPE_REDUCER.SET_SIZE_RING: {

      return {
        ...state,
        interfaceInfo: {
          ...state.interfaceInfo,
          sizeRing: action.payload,
        }
      }
    }
    case TYPE_REDUCER.SET_ENGAGEMENT_CHOSEN: {
      return {
        ...state,
        nextButtonFlag: {
          ...state.nextButtonFlag,
          isEngagementChosen: action.payload
        }
      }
    }
    case TYPE_REDUCER.SET_ACTIVE_TYPE: {
      return {
        ...state,
        nextButtonFlag: {
          ...state.nextButtonFlag,
          isActiveType: action.payload
        }
      }
    }

    case TYPE_REDUCER.SHOW_REMOVE_MODAL: {
      return {
        ...state,
        modalInfo: {
          ...state.modalInfo,
          modalRemove: action.payload
        }
      }
    }
    case TYPE_REDUCER.SHOW_REMOVE_RING_MODAL: {
      return {
        ...state,
        modalInfo: {
          ...state.modalInfo,
          modalRemoveRing: action.payload
        }
      }
    }
    case TYPE_REDUCER.SHOW_MODAL_WITH_SAVE_RING: {
      const { nameModal, saveItem } = action.payload;

      return {
        ...state,
        modalInfo: {
          ...state.modalInfo,
          [nameModal]: true,
          savedItem: saveItem,
        }
      }
    }
    case TYPE_REDUCER.SET_VIEW_ANGLE: {
      const { ROTATIONS } = action.payload;

      return {
        ...state,
        rotationAngle: ROTATIONS,
      }
    }

    default:
      return state;
  }
};

export default Settings;
