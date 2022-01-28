import React, { FC } from 'react';
import s from "./NextButton.module.scss";
import { ButtonNext } from "../../assets/NextButton2";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveAuxiliaryButtons } from '../../store/actions/Settings';
import { getNextButtonTemp} from "../../store/selectors/selectors";

interface PROPS {
    countActiveRings: number;
}

const NextButton: FC<PROPS> = ({ countActiveRings }) => {
    const dispatch = useDispatch();
    const isArrowLeft = useSelector(getNextButtonTemp);

    const clickPopupHandler = () => {
        dispatch(setActiveAuxiliaryButtons(true));
    }

    const clickPopupHandlerBackArrow = () => {
        dispatch(setActiveAuxiliaryButtons(true));
    }

    let buttonClass = `${s.buttonNext}`;
    if (isArrowLeft) buttonClass += ` ${s.withBackArrow}`;

    return (
        <button onClick={() => clickPopupHandler()} className={countActiveRings && !isArrowLeft ? s.buttonNext_active : buttonClass} >
            {isArrowLeft && <div onClick={() => clickPopupHandlerBackArrow()} className={s.arrow_left}><ButtonNext /></div>}
            <div className={s.container}>
                <span>Continue</span>
                <div className={s.arrow_right}><ButtonNext /></div>
            </div>
            {isArrowLeft && <div></div>}
        </button>
    );
}

export default NextButton
