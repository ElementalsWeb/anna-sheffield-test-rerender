
import { startThreeKitObject, TYPE_REDUCER } from "../../utils/constants";
import { remoteRing, setMainRing, ShowModalWithSaveRing, setMainRingWithRotation, removeMainRingWithRotation } from "../actions/Settings";
import { activeRing, ThreeKitParams } from "../interface";
import { getActiveListElement, getActiveListTreeKitInfo } from "../selectors/selectors";

export const threeKitUpdate = (store: any) => (next: any) => (action: any) => {

    switch (action.type) {
        case TYPE_REDUCER.SET_MAIN_RING: {

            let stateLocal = store.getState();
            let activeElement: any[] = getActiveListElement(stateLocal);
            let tempArrayActiveStep: any[] = [];

            activeElement.forEach(item => {
                tempArrayActiveStep.push(item['itemState']['stepSection']);
            });
            break;
        }

        case TYPE_REDUCER.MODAL_SELECT_ANOTHER_RING: {

            let state = store.getState();
            let { activeGroup, itemSelect } = action['payload'];
            const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state['Configurations'].activeListItem));
            const lastItem = activeListItemCopy.reverse()[activeListItemCopy.length - 1];
            const selectStep = state['Configurations'].interfaceInfo.stepSection;
            let activeListElement = activeListItemCopy.sort((a, b) => a['stepSection'] - b['stepSection']);
            let isEngagement: any = activeListItemCopy.filter((item: any) => item['typeItem'] === 'engagement');
            let lastItemStep = null;

            if (activeListElement.length > 0) {
                lastItemStep = activeListElement[activeListItemCopy.length - 1]['stepSection'];
            }
            if (activeListItemCopy.length > 0 && activeGroup === 'engagement' && lastItemStep !== null && lastItemStep < selectStep) {

                store.dispatch(setMainRingWithRotation({ activeGroup, item: itemSelect }));
            } else if (activeListItemCopy.length > 2) {
                let firstItemStep = activeListElement[0]['stepSection'];
                let lastItemStep = activeListElement[activeListItemCopy.length - 1]['stepSection'];

                if (firstItemStep < selectStep && selectStep < lastItemStep) {

                    let newItem: activeRing = {
                        name: itemSelect.name,
                        ringActive: itemSelect.id,
                        typeItem: activeGroup,
                        activeColor: itemSelect.colors[0],
                        activeCarat: !!itemSelect?.carats ? itemSelect.carats[0] : null,
                        stepSection: 0,
                    }

                    action = store.dispatch(ShowModalWithSaveRing({ 'nameModal': 'modalSelectAnotherRing', 'saveItem': newItem }));
                } else {
                    action = store.dispatch(setMainRing({ activeGroup, item: itemSelect }));
                }
            }
            // else if (activeGroup !== 'engagement' && !isEngagement[0] && activeListItemCopy.length > 1 && selectStep === lastItem['stepSection']) {

            //     let newItem: activeRing = {
            //         name: itemSelect.name,
            //         ringActive: itemSelect.id,
            //         typeItem: activeGroup,
            //         activeColor: itemSelect.colors[0],
            //         activeCarat: !!itemSelect?.carats ? itemSelect.carats[0] : null,
            //         stepSection: 0,
            //     }
                

            //     action = store.dispatch(ShowModalWithSaveRing({ 'nameModal': 'modalSelectAnotherRing', 'saveItem': newItem }));
            // }
            else {
                action = store.dispatch(setMainRing({ activeGroup, item: itemSelect }));
            }
            break;
        }
        case TYPE_REDUCER.CHECK_RING_REMOVE: {
            let { itemStateActive }: any = action['payload'];
            let state = store.getState();

            let activeStep: number;

            if (!!itemStateActive) {
                activeStep = itemStateActive.stepSection;
            } else {
                activeStep = state.Configurations.interfaceInfo.stepSection;
            }
            const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state['Configurations'].activeListItem));
            let activeListElement = activeListItemCopy.sort((a, b) => a['stepSection'] - b['stepSection']);
            let SelectElement = activeListElement.filter(ring => ring['stepSection'] === activeStep)[0];


            if (activeListItemCopy.length > 2) {
                let firstItemStep = activeListElement[0]['stepSection'];
                let lastItemStep = activeListElement[activeListItemCopy.length - 1]['stepSection'];

                if (firstItemStep < activeStep && activeStep < lastItemStep) {
                    action = store.dispatch(ShowModalWithSaveRing({ 'nameModal': 'modalRemoveRing', 'saveItem': SelectElement }));
                } else {
                    action = store.dispatch(ShowModalWithSaveRing({ 'nameModal': 'modalRemoveRingQuestion', 'saveItem': SelectElement }));
                }
            } else {
                action = store.dispatch(ShowModalWithSaveRing({ 'nameModal': 'modalRemoveRingQuestion', 'saveItem': SelectElement }));
            }

            break;
        };
        case TYPE_REDUCER.REMOVE_RING_WRAP: {

            const state = store.getState();
            const activeListItemCopy: activeRing[] = JSON.parse(JSON.stringify(state['Configurations'].activeListItem));
            const activeGroup = action['payload']['itemStateActive']['typeItem'];
            let aboveBandsCounter: number = 0;
            let belowBandsCounter: number = 0;

            if (activeGroup === 'engagement') {
                activeListItemCopy.forEach((item: any) => {
                    if (item['stepSection'] < action['payload']['itemStateActive']['stepSection']) {
                        aboveBandsCounter++;
                    }
                    if (item['stepSection'] > action['payload']['itemStateActive']['stepSection']) {
                        belowBandsCounter++;
                    }
                });
            }

            if (activeListItemCopy.length > 1 && activeGroup === 'engagement' && aboveBandsCounter > 0 && belowBandsCounter < 1) {
                store.dispatch(removeMainRingWithRotation(action.payload));
            }
            else {
                store.dispatch(remoteRing(action.payload));
            }
            break;
        }
    }

    let result = next(action);

    switch (action.type) {
        case TYPE_REDUCER.SET_REMOTE_RING:
        case TYPE_REDUCER.SET_MAIN_RING:
        case TYPE_REDUCER.SET_MAIN_RING_WITH_ROTATION:
        case TYPE_REDUCER.REMOVE_MAIN_RING_WITH_ROTATION:
        case TYPE_REDUCER.SET_COLOR_RING:
        case TYPE_REDUCER.MODAL_RESET_CONFIG_AND_SAVE_ITEM:
        case TYPE_REDUCER.REMOVE_SIDE_RING:


            let stateLocal = store.getState();
            let { activeElement }: { activeElement: ThreeKitParams[] } = getActiveListTreeKitInfo(stateLocal);
            // debugger
            let tempThreeKitObj: any = startThreeKitObject;
            let threekitAtribute = window.configurator.getAttributes();

            window.configurator.setConfiguration({})
            activeElement.forEach((ring: ThreeKitParams) => {

                console.log(ring['nameAttribute']);
                let ringAttribute = threekitAtribute.filter((attribute: any) => attribute['name'] === ring['position'])[0];
                let ringAttributeMaterial = threekitAtribute.filter((attribute: any) => attribute['name'] === `${ring['position']} Metal`)[0];

                let activeRing = ringAttribute['values'].filter((attributeRing: any) => attributeRing['name'].includes(ring['nameAttribute']))

                let activeRingMetal = ringAttributeMaterial['values'].filter((attributeRing: any) => attributeRing['name'].includes(ring['colorName']))[0];

                if (activeRing.length < 1) return null;
                tempThreeKitObj = {
                    ...tempThreeKitObj,
                    [ring['position']]: {
                        'assetId': activeRing[0]['assetId'], configuration: "",
                        type: "item"
                    },
                    [`${ring['position']} Metal`]: {
                        'assetId': activeRingMetal['assetId'], configuration: "",
                        type: "item"
                    },
                    [`${ring['position']} Order`]: ring['positionRingThreeKit'],
                }

            })
            // debugger
            window.configurator.setConfiguration(tempThreeKitObj)

            break;

    }

    return result;
};
