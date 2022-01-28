import React from 'react';
import { useDispatch } from 'react-redux';
import { resetConfig, setActiveAuxiliaryButtons } from '../../store/actions/Settings';
import s from './RemoveModal.module.scss';


export const RemoveModal = ({ ...props }) => {
    const { closeFunc } = props;
    const dispatch = useDispatch();

    const onResetConfig = () => {
        closeFunc();
        dispatch(resetConfig());
        dispatch(setActiveAuxiliaryButtons(false));
    };
    return (
        <div className={`${s.modal}`}>
            <header>If you start again, this ring will not be saved.
                Are you sure you want to reset?</header>
            <main>
                <button className={`${s.btn} ${s.btn_black}`} onClick={() => closeFunc()}>Cancel</button>
                <button className={`${s.btn} ${s.btn_white} `} onClick={() => onResetConfig()}>Reset</button>
            </main>
        </div>
    )
}
