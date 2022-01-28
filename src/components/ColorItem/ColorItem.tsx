import React from "react";

import s from "./ColorItem.module.scss";
export const ColorItem = ({ ...props }) => {
  const { item, onSelected, isActive } = props;

  let colorClasses =  `${s.color_item}`;
 
  if (isActive) colorClasses += ` ${s.active}`;

  return (
    <div
      className={colorClasses}
      onClick={() => onSelected(item)}
      style={{ backgroundColor: item.value }}
    ></div>
  );
};
