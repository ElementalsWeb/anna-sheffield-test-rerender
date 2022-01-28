import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, resetConfig, setActiveAuxiliaryButtons, modalResetAndSaveItem,  setTempMobileActive, removeRingWrap } from '../../store/actions/Settings'

import { showModal, getSaveItemInModal, autoCloseModal, getCountActiveRing } from '../../store/selectors/selectors'
import { ModalFrame } from '../ModalFrame/ModalFrame'
import { RemoveModal } from '../RemoveModal/RemoveModal'
import { ShareModal } from '../ShareModal/ShareModal'
import { RemoveModalRing } from '../RemoveRingModal/RemoveModalRing'
 

const modalInfoArray = {
    modalRemoveRing: {
        title: "If you remove this ring, the configuration will start from scratch",
        whiteButton: "REMOVE",
        blackButton: "CANCEL",
    },
    modalSelectAnotherRing: {
        capitalTitle:'Oops!',
        title: "This band does not fit in this position. Choose “Start Over” if you’d like to begin again using this band.",
        whiteButton: "Start Over with New Band",
        blackButton: "Back to Building Your Ring Suite",
    },
    modalRemoveRingQuestion: {
        title: "Are you sure you want to remove the ring?",
        whiteButton: "REMOVE",
        blackButton: "CANCEL",
    }
}

export const WrapModals = () => {

    let ShowModal: any = useSelector(showModal);
    const dispatch = useDispatch();
    const autoCloseItem: any = useSelector(autoCloseModal);
    const saveItemInModal = useSelector(getSaveItemInModal);
    const activeRingsAmount = useSelector(getCountActiveRing);
    const [timerStart, setTimerStart] = useState("");
    let timeId: any;

    const clearTime = (timeId: any) => {
        clearTimeout(timeId);
    }

    const onCloseModal = (idModal: string) => {
        dispatch(closeModal(idModal));
    }
 
    useEffect(() => {

        setTimerStart(autoCloseItem.prop);
        if (autoCloseItem.flag) {
            // modalAutoClose();
        }
        else {
            clearTime(timeId);
        }
    }, [autoCloseItem]);



    const modalRemoveRingQuestion = async () => {
        await dispatch(removeRingWrap({ itemStateActive: saveItemInModal }));
        if (activeRingsAmount <= 1) {
            await dispatch(resetConfig());
            await dispatch(setActiveAuxiliaryButtons(false));
        }
        else {
            await dispatch(setActiveAuxiliaryButtons(true));
        }
        await onCloseModal("modalRemoveRingQuestion");
        await dispatch(setTempMobileActive(false));
    }
    const removeResetModal = () => {
        dispatch(resetConfig());
        dispatch(setActiveAuxiliaryButtons(false));
        onCloseModal("modalRemoveRing");
    }
    const selectAnotherRingReset = async () => {

        await dispatch(modalResetAndSaveItem());
        await dispatch(setActiveAuxiliaryButtons(false));
        await onCloseModal("modalSelectAnotherRing");
    }
    return (
        <>
            {ShowModal['modalShare'] && (<ModalFrame closeFunc={() => onCloseModal("modalShare")} id="modalShare" key={`shareModel`} timerStart={timerStart} >
                <ShareModal closeFunc={() => onCloseModal("modalShare")} />
            </ModalFrame>)}

            {ShowModal['modalRemove'] && (<ModalFrame closeFunc={() => onCloseModal("modalRemove")} id="modalRemove" key={`RemoveItem`} timerStart={timerStart}>
                <RemoveModal closeFunc={() => onCloseModal("modalRemove")} />
            </ModalFrame>)}
            {ShowModal['modalRemoveRing'] && (<ModalFrame closeFunc={() => onCloseModal("modalRemoveRing")} id="modalRemoveRing" key={`modalRemoveRing`} timerStart={timerStart}>
                <RemoveModalRing
                    modalInfoArray={modalInfoArray['modalRemoveRing']}
                    buttonFunction={removeResetModal}
                    closeFunc={() => onCloseModal("modalRemoveRing")}
                />
            </ModalFrame>)}
            {ShowModal['modalSelectAnotherRing'] && (<ModalFrame closeFunc={() => onCloseModal("modalSelectAnotherRing")} id="modalSelectAnotherRing" key={`modalSelectAnotherRing`} timerStart={timerStart}>
                <RemoveModalRing
                    modalInfoArray={modalInfoArray['modalSelectAnotherRing']}
                    buttonFunction={selectAnotherRingReset}
                    closeFunc={() => onCloseModal("modalSelectAnotherRing")}
                    selectAnotherRing
                />
            </ModalFrame>)}
            {ShowModal['modalRemoveRingQuestion'] && (<ModalFrame closeFunc={() => onCloseModal("modalRemoveRingQuestion")} id="modalRemoveRingQuestion" key={`modalRemoveRingQuestion`} timerStart={timerStart}>
                <RemoveModalRing
                    modalInfoArray={modalInfoArray['modalRemoveRingQuestion']}
                    buttonFunction={modalRemoveRingQuestion}
                    closeFunc={() => onCloseModal("modalRemoveRingQuestion")}
                />
            </ModalFrame>)}
        </>
    );
}
