import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
   setCaratsRing, selectAnotherRing, setColorRing, setTempMobileActive, checkRingRemove
} from '../../store/actions/Settings';
import { getActiveRing, getActiveRingCarats, getActiveRingColor, getRingSection } from '../../store/selectors/selectors';
import { caratInterf, colorInterf, groupMainRing } from '../../utils/commonProperty';
import { bandsRingInterf, engagementRingInterf } from '../../utils/listRing';

import { RingItem } from '../RingItem/RingItem';

export const RingSection: Function = ({ ...props }): JSX.Element[] => {
    const { activeGroup } = props;
    const activeRing = useSelector(getActiveRing);
    const activeRingCarats = useSelector(getActiveRingCarats);
    const activeRingColor = useSelector(getActiveRingColor);
    const activeSettingItems = useSelector(state => getRingSection(state, activeGroup));
    const dispatch = useDispatch();

    const onSelectedRing =
        (activeGroup: groupMainRing) => async (item: engagementRingInterf | bandsRingInterf, index: number) => {
            await dispatch(setTempMobileActive(false));
            // await dispatch(setMainRing({ activeGroup, item }));

            await dispatch(selectAnotherRing({ activeGroup, itemSelect: item }));
        };


    const onColorRing =
        (activeGroup: groupMainRing) =>
            (item: engagementRingInterf | bandsRingInterf) =>
                async (color: colorInterf) => {
                    await dispatch(setColorRing({ activeGroup, item, color }));
                };
    const onCaratsRing =
        (activeGroup: groupMainRing) =>
            (item: engagementRingInterf | bandsRingInterf) =>
                (carat: caratInterf) => {
                    dispatch(setCaratsRing({ activeGroup, item, carat }));
                };

    const removeRing =
        async (item: engagementRingInterf | bandsRingInterf, itemStateActive?: any) => {
            await dispatch(checkRingRemove({ item, itemStateActive }));
        };
        
    return (activeSettingItems.map((ring: engagementRingInterf | bandsRingInterf, index: number) => {
        let isActive = !!activeRing && activeRing['ringActive'] === ring.id;

        return (
            <>
                <RingItem
                    key={`${ring.id}_${activeGroup}`}
                    item={ring}
                    isActive={isActive}
                    activeRingColor={activeRingColor}
                    activeRingCarat={activeRingCarats}
                    onSelected={() => onSelectedRing(activeGroup)(ring, index)}
                    onRemoveRing={() => removeRing(ring)}
                    onSelectedColor={onColorRing(activeGroup)(ring)}
                    onSelectedCarat={onCaratsRing(activeGroup)(ring)}
                ></RingItem>
            </>
        );
    })
    )
}
