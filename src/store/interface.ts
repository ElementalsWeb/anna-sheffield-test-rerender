import { caratInterf, colorInterf, groupMainRing, groupRingsInterf, sectionRing } from "../utils/commonProperty";
import { bandsRingInterf, caratsType, colorsType, engagementRingInterf } from "../utils/listRing";
import { rulesMap } from "../utils/rulesRing";

export enum SectionIndexType {
    top3 = -3,
    top2 = -2,
    top1 = -1,
    center = 0,
    bottom1 = 1,
    bottom2 = 2,
    bottom3 = 3,
}

export type typeSection = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export interface ActionType {
    type: string,
    payload: any
}

export interface sectionInterf {
    name: string;
    nameIsEngagementChosen?: string,
    id: string;
    index: SectionIndexType;
    groups: groupRingsInterf[] | [];
    items: engagementRingInterf[] | bandsRingInterf[] | [];
}

export interface activeRing {
    name: string;
    ringActive: string;
    activeColor: colorsType | null,
    activeCarat: caratsType | null,
    typeItem: groupMainRing,
    stepSection: typeSection,
}
export type activeStepConfig = 'config' | 'basket';

export type directionRingT = 'down' | 'up'

export type variantRingT = {
    "id": string,
    "price": string
}

export interface stateInterf {
    rotationAngle: number[];
    readonly listRings: engagementRingInterf[];
    readonly listBoatRings: bandsRingInterf[];
    readonly commonParams: {
        listColors: colorInterf[];
        listCarats: caratInterf[];
        listGroup: groupRingsInterf[];
    };
    readonly sections: {
        aboveSection: sectionInterf;
        mainSection: sectionInterf;
        belowSection: sectionInterf;
    };
    listPrice: variantRingT[] | [],
    readonly rulesRing: rulesMap,
    readonly rulesBoatRingsStandard: rulesMap,
    readonly rulesBoatRingsNew: rulesMap,
    activeListItem: activeRing[],
    activeSectionInGroup: sectionRing[] | []
    interfaceInfo: {
        stepSection: typeSection,
        stepConfig: activeStepConfig,
        standartActiveGroup: groupMainRing,
        ringCount: number,
        belowRingCount: number,
        aboveRingCount: number,
        loadConfig: boolean,
        saveUrlConfig: string,
        startThreekit: any,
        sizeRing: string | object,
        rotationCurrentStep: number,
        directionRing: directionRingT
    };
    modalInfo: {
        modalDropHintModal: boolean,
        modalRemove: boolean,
        modalShare: boolean,
        modalRemoveRing: boolean;
        modalSelectAnotherRing: boolean;
        modalRemoveRingQuestion: boolean;
        savedItem: any;
        stepSectionActiveItem: any;
    };
    nextButtonFlag: {
        isAuxiliaryButtonsActive: boolean,
        isTempMobileActive: boolean;
        isEngagementChosen: boolean;
        isActiveType: boolean;
    }
    windowWidthMobileFlag: boolean,
}


export interface ThreeKitParams {
    name: string,
    position: string,
    colorName: string,
    position_short: string,
    directionConfig: string,
    nameAttribute: string,
    positionRingThreeKit: number,
}

export interface SharedInterfaceInfoParams {
    aboveRingCount: number;
    belowRingCount: number;
    loadConfig: boolean;
    ringCount: number;
    saveUrlConfig: string;
    standartActiveGroup: string;
    stepConfig: string;
    stepSection: number;
}