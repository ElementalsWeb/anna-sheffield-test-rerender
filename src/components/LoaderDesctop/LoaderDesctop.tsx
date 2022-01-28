import React from 'react'
import { useSelector } from 'react-redux';
import { getLoadConfig } from '../../store/selectors/selectors';
import s from "./LoaderDesctop.module.scss";

export const LoaderDesctop = () => {

    const isLoading: boolean = useSelector(getLoadConfig);

    return (
        <>
            {!isLoading && (
                <div className={s.loaderDesctopImg}>
                    <img className={s.img} src="/img/loaderRingsDescktop.jpg" alt="" />
                    <div className={s.loader}>
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 4.125C9.66549 4.125 4.125 9.66549 4.125 16.5C4.125 23.3345 9.66549 28.875 16.5 28.875C23.3345 28.875 28.875 23.3345 28.875 16.5H33C33 25.6127 25.6127 33 16.5 33C7.3873 33 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0V4.125Z" fill="black" />
                        </svg>
                    </div>
                </div>
            )}
        </>
    )
}
