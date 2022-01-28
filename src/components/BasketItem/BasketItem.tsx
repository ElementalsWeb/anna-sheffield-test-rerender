import React from "react";

import { ColorItem } from "../ColorItem/ColorItem";
import { CloseSVG } from "../../assets/CloseSVG";
import s from "./BasketItem.module.scss";
import { bandsRingInterf, engagementRingInterf } from "../../utils/listRing";
import { checkRingRemove } from "../../store/actions/Settings";
import { useDispatch, useSelector } from "react-redux";
import { getPrice, numberWithCommas } from "../../utils/helpersFunction";
import { getPriceRingSelector } from "../../store/selectors/selectors";
import { variantRingT } from "../../store/interface";

export const BasketItem = ({ ...props }) => {
  const { item } = props;


  const getPriceItem: variantRingT = useSelector(getPriceRingSelector({ itemId: item['itemState']['ringActive'], defaultIdColor: item['itemState']['activeColor'], isActive: true }));


  const dispatch = useDispatch();

  const removeRing = async (item: engagementRingInterf | bandsRingInterf, itemStateActive: any) => {
    await dispatch(checkRingRemove({ itemStateActive }));
  };

  let colorIcon = `${s.icon}`;

  return (
    <div className={s.item}>
      <div className={s.itemBasket}>
        <div className={s.img}>
          <img src={item['item'].imgUrl} alt='' />
        </div>
        <div className={s.info}>
          <div className={s.title}>{item['item'].name}</div>
          <div className={s.subtitle}>{item['item'].subName}</div>
          <div className={s.price}>${getPrice(getPriceItem['price'])}</div>
          <div className={s.param_box}>
            {!!item['activeColor'] && (
              <div className={s.color}>
                <div className={colorIcon}>
                  <ColorItem item={item['activeColor']} onSelected={null}></ColorItem>
                </div>
                <div className={s.name}>{item['activeColor'].name}</div>
              </div>
            )}
            {!!item['activeCarat'] && <div className={s.carat}>{item['activeCarat'].value}</div>}
          </div>
          <div className={s.remote} onClick={() => removeRing(item['item'], item['itemState'])}>
            <CloseSVG />
          </div>
        </div>
      </div>
    </div>
  );
};
//