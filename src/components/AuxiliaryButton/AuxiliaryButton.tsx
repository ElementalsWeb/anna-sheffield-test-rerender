import React from 'react'
import s from './AuxiliaryButton.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowLeftSVG, ArrowRightSVG } from '../../assets'
import { IconResetSVG } from '../../assets/IconResetSVG'
import { PlusSVG } from '../../assets/PlusSVG'
import { ShareSVG } from '../../assets/ShareSVG'
import { saveUrlConfig, setAddAboveBand, showRemoveModal, setActiveTypeEngagement, setEngagementChosen, setAddBeloweBand, setTempMobileActive, } from '../../store/actions/Settings'
import { getActiveListElement, getNextButtonFlag, getParamsSaveConfiguration, getStepConfig, checkAvailabilityEngagement, getActiveRingInStep, getRotationInfo, getDirectionRing, getAllRingForBasket } from '../../store/selectors/selectors'
import { SavedConfiguration } from '../../threekit/http/configuration'
import { THREEKIT_PARAMS } from '../PlayerThreeKit/PlayerThreeKit'
import { MobileSwitchColors } from '../MobileSwitchColors/MobileSwitchColors'
import { rulesBangNew, rulesBangStandard } from '../../utils/rulesRingCopy'
import { DropAHint } from '../../assets/DropAHint'
import { URL_POST_QUERY } from '../../utils/constants'
import { useLocation } from 'react-router'
import { groupMainRing } from '../../utils/commonProperty'
export let urlApp = `https://annasheffield.com/pages/the-stacking-suite-builder`


export const AuxiliaryButton = () => {

    const search = useLocation().search;


    const type = new URLSearchParams(search).get('type');

    const activeSettingItems = useSelector(getAllRingForBasket);


    const dispatch = useDispatch();
    const paramsSaveConfiguration = useSelector(getParamsSaveConfiguration);
    const setAuxiliaryButtonsActive = useSelector(getNextButtonFlag);
    const stepConfig = useSelector(getStepConfig);
    const checkEngagement = useSelector(checkAvailabilityEngagement);
    const activeStepItem: any = useSelector(getActiveRingInStep);
    const rotationInfo: any = useSelector(getRotationInfo);
    const directionRing: any = useSelector(getDirectionRing);

    const onChangeStepAbove = () => {
        dispatch(setAddAboveBand());
    };
    const onDropAHint = async () => {

        // console.log(activeSettingItems);

        let dataRing = activeSettingItems.activeListElement.map((item: any) => {
            return {
                name: item[0]['name'],
                subName: item[0]['subName'],
            }
        })


        let saveConfig = await SavedConfiguration({ ...THREEKIT_PARAMS, metadata: { ...paramsSaveConfiguration } });
        let saveUrl: string = `${urlApp}?type=${type}&sku=${saveConfig['shortId']}`;
        let imgPhoto = `https://preview.threekit.com/api/configurations/${saveConfig['shortId']}/thumbnail?bearer_token=${THREEKIT_PARAMS['authToken']}`;

 
        let objConfig = await {
            "type": "DROP_A_HINT",
            "data": {
                "url": saveUrl,
                "image": imgPhoto,
                "listRing": dataRing,
            }
        }

        console.log(objConfig);

        await window.parent.postMessage(JSON.stringify(objConfig), URL_POST_QUERY);


    };
    const onChangeStepBelowe = () => {
        dispatch(setAddBeloweBand());
    };
    const onResetConfig = () => {
        dispatch(showRemoveModal(true));
        dispatch(setTempMobileActive(false));
        dispatch(setActiveTypeEngagement(false));
        dispatch(setEngagementChosen(false));
    };
    const shareConfig = async () => {

        let saveConfig = await SavedConfiguration({ ...THREEKIT_PARAMS, metadata: { ...paramsSaveConfiguration } });
        await dispatch(saveUrlConfig({ saveConfig: saveConfig['shortId'], nameModal: 'modalShare' }));
    };

    const activeList = useSelector(getActiveListElement);


    let class_btn_dropAhint = `${s.btn_dropAhint}`;
    if (stepConfig === 'basket') class_btn_dropAhint += ` ${s.none}`;


    let class_btn_share = `${s.btn_share}`;
    if (stepConfig === 'basket') class_btn_share += ` ${s.none}`;

    let class_btn_reset = `${s.btn_reset}`;
    if (stepConfig === 'basket') class_btn_reset += ` ${s.none}`;


    let switchColors = `${s.MobileSwitchColors}`;
    if (setAuxiliaryButtonsActive) {
        switchColors = `${s.hideMobileSwitchColors}`;
    }

    if (stepConfig === 'config' && !checkEngagement['isCheck'] && activeStepItem['isSelect'] && activeStepItem['activeElement']['typeItem'] !== 'engagement') {
        switchColors += ` ${s.tempBands}`;
    }

    const arrowAngleLeft = () => {
        let activeRotationAngle = window.configurator.getConfiguration()['Rotation Angle'];
        let indexActiveAngle = 0;
        rotationInfo.forEach((angle: any, index: any) => {
            if (angle === activeRotationAngle) {
                indexActiveAngle = index;
            }
        })
        let newIndexAngle = indexActiveAngle + 1;
        if (newIndexAngle > rotationInfo.length - 1) {
            // newIndexAngle = 0
            newIndexAngle = rotationInfo.length - 1
        }
        if (newIndexAngle < 0) {
            // newIndexAngle = rotationInfo.length - 1
            newIndexAngle = 0
        }
        console.log(`test == ${window.configurator.getConfiguration()['Rotation Angle']}`);
        window.configurator.setConfiguration({
            "Rotation Angle": rotationInfo[newIndexAngle],
        });

    }
    const arrowAngleRight = () => {
        let activeRotationAngle = window.configurator.getConfiguration()['Rotation Angle'];
        let indexActiveAngle = 0;
        rotationInfo.forEach((angle: any, index: any) => {
            if (angle === activeRotationAngle) {
                indexActiveAngle = index;
            }
        })
        let newIndexAngle = indexActiveAngle - 1;
        if (newIndexAngle > rotationInfo.length - 1) {
            // newIndexAngle = 0
            newIndexAngle = rotationInfo.length - 1
        }
        if (newIndexAngle < 0) {
            // newIndexAngle = rotationInfo.length - 1
            newIndexAngle = 0
        }
        console.log(`test == ${window.configurator.getConfiguration()['Rotation Angle']}`);
        window.configurator.setConfiguration({
            "Rotation Angle": rotationInfo[newIndexAngle],
        });

    }
    let addAboveText = 'Choose ring or band above';
    let addBelowText = 'Choose ring or band below';

    if (!checkEngagement['isCheck']) {
        addAboveText = 'Choose band above';
        addBelowText = 'Choose band below';
    }



    let isVisibleButtonAbove = activeList.length < 4;
    let isVisibleButtonBelow = activeList.length < 4;

    if (activeList.length > 1) {
        let newActiveListItem = activeList.sort((a: any, b: any) => b['stepSection'] - a['stepSection']);

        let firstItem = newActiveListItem[0]['itemState']
        let lastItem = newActiveListItem[newActiveListItem.length - 1]['itemState']

        let isCheckEngagement = !checkEngagement['isCheck'];

        let listInnerRingsFirst: any = rulesBangNew[firstItem['name']];
        let listOuterRingsFirst: any = rulesBangStandard[firstItem['name']];
        let listInnerRingsLast: any = rulesBangNew[lastItem['name']];
        let listOuterRingsLast: any = rulesBangStandard[lastItem['name']];

        if ((directionRing === 'up' && firstItem['typeItem'] === 'bands')) {

            if (listOuterRingsFirst.length < 1) {
                isVisibleButtonAbove = false;
            }

        }
        if ((directionRing === 'up' && lastItem['typeItem'] === 'bands')) {
            if (listOuterRingsLast.length < 1) {
                isVisibleButtonBelow = false;
            }
        }

        if ((directionRing === 'down' && firstItem['typeItem'] === 'bands')) {

            if (isCheckEngagement && listOuterRingsFirst.length < 1) {
                isVisibleButtonAbove = false;
            }
        }
        if ((directionRing === 'down' && lastItem['typeItem'] === 'bands')) {
            if (isCheckEngagement && listOuterRingsLast.length < 1) {
                isVisibleButtonBelow = false;
            }
        }


    }



    return (
        <>
            <div className={`${s.btn_arrow} ${s.btn_arrow_left}`} onClick={() => arrowAngleLeft()} >
                <ArrowLeftSVG />
            </div>
            <div className={`${s.btn_arrow} ${s.btn_arrow_right}`} onClick={() => arrowAngleRight()}  >
                <ArrowRightSVG />
            </div>
            {isVisibleButtonAbove && (<div className={`${s.btn_round} ${s.btn_round_top}`} onClick={() => onChangeStepAbove()}>
                <div className={s.btn}>
                    <PlusSVG />
                </div>
                <div className={s.text}>{addAboveText}</div>
            </div>)}
            {isVisibleButtonBelow && (<div className={`${s.btn_round} ${s.btn_round_bottom}`} onClick={() => onChangeStepBelowe()}>
                <div className={s.btn}>
                    <PlusSVG />
                </div>
                <div className={s.text}>{addBelowText}</div>
            </div>)}

            <div className={class_btn_dropAhint} onClick={() => onDropAHint()}>
                <DropAHint />
                <div className={s.text}>DROP A HINT</div>
            </div>
            <div className={class_btn_share} onClick={() => shareConfig()}>
                <ShareSVG />
                <div className={s.text}>SHARE</div>
            </div>
            <div className={class_btn_reset} onClick={() => onResetConfig()}>
                <IconResetSVG />
                <div className={s.text}>START OVER</div>
            </div>
            {stepConfig === 'config' && <div className={switchColors}>
                <MobileSwitchColors />
            </div>}

        </>
    );
}
