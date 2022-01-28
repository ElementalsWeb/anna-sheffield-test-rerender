import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightLightSVG, BasketSVG } from "../../assets";
import { ArrowLeftLightSVG } from "../../assets/ArrowLeftLightSVG";
import { setStepConfig, resetConfig, setActiveAuxiliaryButtons, setSizeRing } from "../../store/actions/Settings";
import { activeStepConfig } from "../../store/interface";
import { getActiveListElement, getAllPriceActiveListElement, getAllRingForBasket, getSizeRing } from "../../store/selectors/selectors";
import { URL_POST_QUERY } from "../../utils/constants";
import { getPrice, numberWithCommas } from "../../utils/helpersFunction";
import { BasketItem } from "../BasketItem/BasketItem";
import { SelectComponent } from "../SelectComponent/SelectComponent";

import s from "./GroupBasket.module.scss";

const options = [
    { value: "size_3", label: "3" },
    { value: "size_3_25", label: "3.25" },
    { value: "size_3_50", label: "3.5" },
    { value: "size_3_75", label: "3.75" },
    { value: "size_4", label: "4" },
];

export const GroupBasket = () => {
    const activeListElement = useSelector(getActiveListElement);
    const allRingForBasket = useSelector(getAllRingForBasket);
    const sizeRing = useSelector(getSizeRing);
    const allPrice = useSelector(getAllPriceActiveListElement);
    const dispatch = useDispatch();


    const changeStepConfig = (stepConfig: activeStepConfig) => {
        dispatch(setStepConfig(stepConfig));
        //dispatch(setActiveAuxiliaryButtons(true));
        if (activeListElement.length < 1) {
            dispatch(setActiveAuxiliaryButtons(false));
            dispatch(resetConfig());
        }

    };




    const validate = (values: any) => {
        const errors: any = {}

        if (!values.size) {
            errors.size = 'PLEASE SELECT SIZE'
        }
        return errors
    }
    const [isCheckFormic, setIsCheckFormic] = useState(false)
    const formik = useFormik({
        initialValues: {
            size: sizeRing
        },
        validate,
        onSubmit: (selectValue: any) => {

            console.log(selectValue);


            // {
            //     "type": "ADD_TO_BAG",
            //     "data": [
            //       {
            //         "id": "1234567891",
            //         "quantity": 1
            //       },
            //       {
            //         "id": "2345678910",
            //         "quantity": 1
            //       }
            //     ] 
            //   }
            //   ​

            let objConfig = {
                type: "ADD_TO_BAG",
                data: allRingForBasket['basketData'],
                sizeRing: selectValue['size']['label']
            }


            var parent = window.parent;

            console.log(objConfig);
            parent.postMessage(JSON.stringify(objConfig), URL_POST_QUERY);
            console.log("send date parent page");
            console.log(objConfig);

        }
    })


    return (

        <div className={s.basketWrap}>
            <div className={s.basketBox}>
                <div className={s.prew_button} >
                    <div className={s.prev_button_content} onClick={() => changeStepConfig('config')}>
                        <div className={s.icon}>
                            <ArrowLeftLightSVG />
                        </div>
                        <div className={s.text} >BACK TO CUSTOMIZE</div>
                    </div>
                </div>
                <div className={s.mainBasket}>
                    {/* <div className={s.boxBasketWrap}> */}
                    <div className={s.boxBasket}>
                        {!!activeListElement && activeListElement.map((basketItem: any, index: any) => <BasketItem key={`${basketItem['item']['id']}-${index}`} item={basketItem} />)}

                    </div>
                    {/* </div> */}

                    <div className={s.footer_basket}>
                        <div className={s.size}>
                            <div className={s.size_select}>

                                <SelectComponent
                                    isSearchable={false}
                                    placeholder={"Size "}
                                    // defaultMenuIsOpen={true}
                                    options={options}
                                    onChange={(value: any) => {

                                        dispatch(setSizeRing(value));
                                        formik.setFieldValue('size', value)
                                    }}
                                    value={sizeRing}
                                    isCheckFormic={isCheckFormic}



                                />


                            </div>
                            {!formik.values.size && <div className={s.error}>{formik.errors.size}</div>}
                            <div className={s.name}>SIZE GUIDE</div>
                        </div>
                        <div className={s.allPriceContainer}>
                            <div className={s.allPrice}>
                                <div className={s.name}>TOTAL:</div>

                                <div className={s.price}>${getPrice(allPrice)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className={s.btnClass} onClick={() => {

                setIsCheckFormic(true);
                formik.handleSubmit()
            }}>
                <div className={s.info}  >
                    <BasketSVG />
                    <div className={s.name}>ADD TO BAG</div>
                </div>
                <div className={s.box}>
                    <div className={s.icon}>
                        <ArrowRightLightSVG />
                    </div>
                </div>
            </button>
        </div>

    );
};