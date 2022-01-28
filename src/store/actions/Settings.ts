
import { TYPE_REDUCER } from "../../utils/constants";
import { ActionType, activeStepConfig } from "../interface";

export const setMainRing = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_MAIN_RING,
  payload: data,
});
export const removeRingWrap = (data: any) => ({
  type: TYPE_REDUCER.REMOVE_RING_WRAP,
  payload: data
});
export const setMainRingWithRotation = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_MAIN_RING_WITH_ROTATION,
  payload: data,
});
export const setThreeKitAtribute = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_THREEKIT_ATTRIBUTE,
  payload: data,
});
export const setColorRing = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_COLOR_RING,
  payload: data,
});
export const setCaratsRing = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_CARAT_RING,
  payload: data,
});
export const remoteRing = (data: any): ActionType => ({
  type: TYPE_REDUCER.SET_REMOTE_RING,
  payload: data,
});
export const setSection = (indexSection: number): ActionType => ({
  type: TYPE_REDUCER.SET_SECTION,
  payload: indexSection,
});
export const setStepConfig = (step: activeStepConfig): ActionType => ({
  type: TYPE_REDUCER.SET_STEP_CONFIG,
  payload: step,
});
export const closeModal = (idModal: string): ActionType => ({
  type: TYPE_REDUCER.CLOSE_MODAL,
  payload: idModal,
});
export const setStandartGroup = (date: any): ActionType => ({
  type: TYPE_REDUCER.SET_STANDART_GROUP,
  payload: date,
});
export const showShareModal = (date: any): ActionType => ({
  type: TYPE_REDUCER.SHOW_SHARE_MODAL,
  payload: date,
});
export const checkRingRemove = (date: any): ActionType => ({
  type: TYPE_REDUCER.CHECK_RING_REMOVE,
  payload: date,
});
export const saveUrlConfig = (date: any): ActionType => ({
  type: TYPE_REDUCER.SET_URL_CONFIG,
  payload: date,
});
export const setActiveAuxiliaryButtons = (data: any) => ({
  type: TYPE_REDUCER.SET_ACTIVE_AUXILIARY_BUTTONS,
  payload: data,
});
export const setTempMobileActive = (data: any) => ({
  type: TYPE_REDUCER.SET_TEMP_MOBILE_ACTIVE,
  payload: data,
});
export const setSharedInfo = (data: any) => ({
  type: TYPE_REDUCER.SET_SHARED_INFO,
  payload: data
});
export const setEngagementChosen = (data: any) => ({
  type: TYPE_REDUCER.SET_ENGAGEMENT_CHOSEN,
  payload: data,
});
export const setActiveTypeEngagement = (data: any) => ({
  type: TYPE_REDUCER.SET_ACTIVE_TYPE,
  payload: data,
});
export const showRemoveModal = (data: any) => ({
  type: TYPE_REDUCER.SHOW_REMOVE_MODAL,
  payload: data
});
export const showRemoveRingModal = (data: any) => ({
  type: TYPE_REDUCER.SHOW_REMOVE_RING_MODAL,
  payload: data
})
export const showModals = (data: any) => ({
  type: TYPE_REDUCER.SHOW_MODALS,
  payload: data,
});
export const removeSideRings = (data: any) => ({
  type: TYPE_REDUCER.REMOVE_SIDE_RING,
  payload: data
});
export const selectAnotherRing = (data: any) => ({
  type: TYPE_REDUCER.MODAL_SELECT_ANOTHER_RING,
  payload: data
});
export const selectAnotherRingReset = (data: any) => ({
  type: TYPE_REDUCER.MODAL_SELECT_ANOTHER_RING_RESET,
  payload: data
});
export const setSavedModalItem = (data: any) => ({
  type: TYPE_REDUCER.SET_SAVED_MODAL_ITEM,
  payload: data
});
export const setSizeRing = (data: any) => ({
  type: TYPE_REDUCER.SET_SIZE_RING,
  payload: data
});
export const modalResetAndSaveItem = () => ({
  type: TYPE_REDUCER.MODAL_RESET_CONFIG_AND_SAVE_ITEM,
});
export const setSelectedItem = (data: any) => ({
  type: TYPE_REDUCER.SET_SELECTED_ITEM,
  payload: data
});
export const ShowModalWithSaveRing = (data: { nameModal: string, saveItem: any }) => ({
  type: TYPE_REDUCER.SHOW_MODAL_WITH_SAVE_RING,
  payload: data
});
export const setWindowWidthMobileFlag = (data: any) => ({
  type: TYPE_REDUCER.SET_WINDOW_WIDTH_MOBILE_FLAG,
  payload: data
})
export const setStepSectionActiveItem = () => ({
  type: TYPE_REDUCER.SET_STEP_SECTION_ACTIVE_ITEM,
});
export const setViewAngle = (data: any) => ({
  type: TYPE_REDUCER.SET_VIEW_ANGLE,
  payload: data
});
export const setReversedRingList = (data: any) => ({
  type: TYPE_REDUCER.SET_REVERSED_RING_LIST,
  payload: data,
});
export const removeMainRingWithRotation = (data: any) => ({
  type: TYPE_REDUCER.REMOVE_MAIN_RING_WITH_ROTATION,
  payload: data
});
export const setAddAboveBand = () => ({ type: TYPE_REDUCER.SET_ADD_ABOVE });
export const setAddBeloweBand = () => ({ type: TYPE_REDUCER.SET_ADD_BELOW });
export const resetConfig = () => ({ type: TYPE_REDUCER.RESET_CONFIG });
export const loadConfig = (data: any) => ({ type: TYPE_REDUCER.LOAD_CONFIG, payload: data });

// export const addConfigurationParams = (data) => ({
//   type: TYPE_REDUSER.ADD_PARAMS,
//   payload: data,
// });


// export const setMainStep = (step) => ({
//   type: TYPE_REDUSER.SET_MAIN_STEP,
//   payload: step,
// });
// export const setMainActiveGroup = (idGroup) => ({
//   type: TYPE_REDUSER.SET_MAIN_ACTIVE_GROUP,
//   payload: idGroup,
// });

// // Ring Actions
// export const setRingActive = (ringId) => ({
//   type: TYPE_REDUSER.SET_RING_ACTIVE,
//   payload: ringId,
// });
// export const setRingColorActive = (colorId) => ({
//   type: TYPE_REDUSER.SET_RING_COLOR_ACTIVE,
//   payload: colorId,
// });
// export const setRingCaratsActive = (caratsId) => ({
//   type: TYPE_REDUSER.SET_RING_CARATS_ACTIVE,
//   payload: caratsId,
// });

// // Group Config

// export const setActiveGroup = (groupId) => ({
//   type: TYPE_REDUSER.SET_ACTIVE_GROUP,
//   payload: groupId,
// });
// export const setAdditionActiveGroup = (item) => ({
//   type: TYPE_REDUSER.SET_ADDITION_ACTIVE_GROUP,
//   payload: item,
// });

// // additional Property
// export const setAdittionalProperty = (item, groupId) => ({
//   type: TYPE_REDUSER.SET_ADDITION_PROPERTY,
//   payload: { item: item, groupId: groupId },
// });
// export const setAdittionalColorProperty = (groupId, color) => ({
//   type: TYPE_REDUSER.SET_ADDITION_COLOR_PROPERTY,
//   payload: { groupId: groupId, color: color },
// });

// // mobile Stepper
// export const setNextStepInStepper = () => ({
//   type: TYPE_REDUSER.SET_NEXT_STEP_IN_MOBIL,
// });
// export const setPrewStepInStepper = () => ({
//   type: TYPE_REDUSER.SET_PREW_STEP_IN_MOBIL,
// });
