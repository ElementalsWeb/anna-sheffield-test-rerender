import { groupMainRing } from "./commonProperty";
import { bandsRingInterf, engagementRingInterf } from "./listRing";

interface threeKitParams {
    activeGroup: groupMainRing,
    item: engagementRingInterf | bandsRingInterf
    activeListElement: any
}

export const setThreeKitAtribute = ({ activeGroup, item, activeListElement }: threeKitParams) => {


    // if (activeGroup === 'bands') {
    //     let name = item['valueConfig'];
    // }


    // debugger;
    // window.configurator.getAttributes()[4]['values'].filter(item => item['name'] === 'HazelineSolitaireRing1.5ct_Pos_1')
    // debugger;
}
