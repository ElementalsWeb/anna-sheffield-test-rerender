import React from "react";

import s from "./CaratItem.module.scss";
export const CaratItem = ({ ...props }) => {
  const { item, onSelected, isActive, isCaratItems } = props;

  let caratClasses = isCaratItems ? `${s.carat}` : `${s.carat_none}`;
  if (isActive) caratClasses += ` ${s.active}`;

  return (
    <div onClick={() => onSelected(item)} className={caratClasses}>
      {item.value}
    </div>
  );
};
