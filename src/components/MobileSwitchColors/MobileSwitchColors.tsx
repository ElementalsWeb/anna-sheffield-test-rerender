import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorItem } from "../ColorItem/ColorItem";

import s from "./MobileSwitchColors.module.scss";
import {  getColor , getActiveRingColorMobile} from "../../store/selectors/selectors";
import {  colorInterf, } from "../../utils/commonProperty";
import {  setColorRing } from "../../store/actions/Settings";


export const MobileSwitchColors = ({ ...props }) => {

  const selectedRing:any = useSelector(getActiveRingColorMobile);
  const dispatch = useDispatch();
  const allColors: colorInterf[] = useSelector(getColor);


  const onColorRing = (itemActive: any) =>
          async (color: colorInterf) => {
              await dispatch(setColorRing({item:{id:itemActive['ringActive']}, color }));
          };
  return (            
         <div className={s.ringDataMobileContainer}>
                 <div className={s.colors}>
                 { selectedRing &&           
                     allColors.map((item, index) => {
                         const isActiveColor =
                         selectedRing?.activeColor === item.id;
                         const isCaratItems = selectedRing?.typeItem === "bands" ? false : true;
                         return (
                           <>
                           <ColorItem
                             key={item.id + index}
                             item={item}
                             isActive={isActiveColor}
                             onSelected={onColorRing(selectedRing)}
                             isCaratItems={isCaratItems}
                           ></ColorItem>
                           </>
                         );
                       })
                 }
               </div>
         </div>
         
             
    );
};
