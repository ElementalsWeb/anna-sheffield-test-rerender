import React, { useEffect } from "react";
import { useSelector } from "react-redux";


import {
  getDependsProp,
  getPrice,
} from "../../utils/helpersFunction";
import { CaratItem } from "../CaratItem/CaratItem";
import { ColorItem } from "../ColorItem/ColorItem";

import s from "./RingItem.module.scss";
import { getCarats, getColor, getPriceRingSelector } from "../../store/selectors/selectors";
import { caratInterf, colorInterf } from "../../utils/commonProperty";
import { CloseSVG } from "../../assets";

export const RingItem = ({ ...props }) => {
  const {
    item,
    onSelected,
    onRemoveRing,
    isActive,
    activeRingColor,
    activeRingCarat,
    onSelectedColor,
    onSelectedCarat,
  } = props;

  let ColorsItem: colorInterf[] = [];
  let CaratsItem: caratInterf[] = [];

  const allColors: colorInterf[] = useSelector(getColor);
  const allCarats: caratInterf[] = useSelector(getCarats);
  const refEl = React.useRef<HTMLDivElement>(null);


  const getPriceItem: any = useSelector(getPriceRingSelector({ itemId: item['id'], defaultIdColor: 'color_1', isActive }));

  if (!!item && !!item.colors && !!allColors) {
    ColorsItem = getDependsProp(allColors, item.colors);
  }

  if (!!item && !!item.carats && !!allCarats) {
    CaratsItem = getDependsProp(allCarats, item.carats);
  }

  let classItem = `${s.itemConfig}`;
  if (isActive) classItem += ` ${s.active}`;

  function getColorsHTML() {
    return (
      ColorsItem &&
      ColorsItem.map((item, index) => {
        const isActiveColor =
          activeRingColor === item.id && isActive ? true : false;
        return (
          <ColorItem
            key={item.id + index}
            item={item}
            isActive={isActiveColor}
            onSelected={onSelectedColor}
          ></ColorItem>
        );
      })
    );
  }

  function getCaratsHTML() {
    return (
      CaratsItem &&
      CaratsItem.map((carat, index) => {
        const isActiveCarat =
          activeRingCarat === carat.id && isActive ? true : false;
        return (
          <CaratItem
            key={item.id + index}
            item={carat}
            isActive={isActiveCarat}
            onSelected={onSelectedCarat}
          ></CaratItem>
        );
      })
    );
  }

  useEffect(() => {
    if (isActive) {
      refEl.current?.scrollIntoView()
    }
  }, [])
 
  return (
    <div ref={refEl} className={classItem}>
      <div className={s.icon_close} onClick={() => onRemoveRing()} >
        <CloseSVG />
      </div>
      <div className={s.mainItem}>
        <div className={s.img} onClick={() => onSelected()}>
          {item.imgUrl && (<img src={item.imgUrl} alt='' />)}

        </div>
        <div className={s.info} onClick={() => onSelected()}>
          <div className={s.name}>{item.name}</div>
          <div className={s.subname}>{item.subName}</div>
          <div className={s.price}>${getPrice(getPriceItem['price'])}</div>
        </div>
      </div>
      <div className={s.config}>
        {ColorsItem.length > 0 && (
          <div className={s.colors}>{getColorsHTML()}</div>
        )}
        {CaratsItem.length > 0 && (
          <div className={s.carats}>{getCaratsHTML()}</div>
        )}
      </div>
    </div>
  );
};
