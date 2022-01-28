import React, { useEffect, useRef } from 'react';
import { CloseSVG } from '../../assets';
import s from './ModalFrame.module.scss';

export const ModalFrame = ({ ...props }) => {
    const { closeFunc } = props;
    const wrapperRef: any = useRef(null);
    useEffect(() => {
        function handleClickOutside(event: any) {

            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                closeFunc();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
  
   
 
    return (
        <div className={`${s.wrap_modal}`}>
            <div ref={wrapperRef} className={`${s.modal_content}`}>
                <header className={`${s.header}`}><CloseSVG onClick={() => closeFunc()} /></header>
                <main className={`${s.main}`}>{props.children}</main>
            </div>

        </div>
    )
}
