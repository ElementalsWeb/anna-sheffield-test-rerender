import React from "react";

import Select, { components } from "react-select";
import { ArrowBottonSVG } from "../../assets/ArrowBottonSVG";

import s from "./SelectComponent.module.scss";

const customStyles = {
  control: (base, state) => {
    let value = state.getValue();
    let isCheckFormic = state.selectProps.isCheckFormic;

    return {
      ...base,
      height: "40px",
      border:
        isCheckFormic && value.length < 1
          ? "1px solid #CF4941"
          : "1px solid #000",
      outline: "none",
      background: "white",
      borderRadius: "0px",
      borderBottom: state.menuIsOpen ? "1px solid transparent" : "",
      cursor: "pointer",
      boxShadow: "none",
      "&:hover": {
        outline: "none",
        boxShadow: "none",
      },
    };
  },
  indicatorSeparator: (base, state) => ({
    ...base,
    display: "none",
  }),
  valueContainer: (base, state) => ({
    ...base,

    padding: "5px 10px",
  }),
  placeholder: (base, state) => ({
    ...base,

    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "11px",
    letterSpacing: "0.11em",
    color: "#B3B3B3",
    padding: "0 7px ",
  }),

  singleValue: (base, state) => ({
    ...base,
    fontWeight: 500,
    fontSize: "9px",
    lineHeight: "11px",
    letterSpacing: "0.11em",
    padding: "5px 7px",
    display: "flex",
    alignItems: "center",
  }),

  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px",
  }),
  input: (base, state) => ({
    ...base,
    position: "absolute",
  }),
  menu: (base, state) => ({
    ...base,
    margin: 0,
    borderRadius: 0,
    boxShadow: "none",
    border: "1px solid #000",
    borderTop: "1px solid #F2F2F2",
  }),
  menuList: (base, state) => ({
    paddingTop: "0px !important",
    ...base,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "9px",
    lineHeight: "11px",
    letterSpacing: "0.11em",
    color: state.isFocused ? "#000" : "#000",

    backgroundColor: state.isSelected ? "#ede8e140" : "#fff",
    padding: "15px 16px",
    fontFamily: "Styrene A Web",
    "&:active": {
      backgroundColor: "#fff",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ede8e140",
    },
  }),
};

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowBottonSVG
        className={
          props.selectProps.menuIsOpen
            ? s.DropdownArrow
            : s.DropdownArrow_isActive
        }
      />
    </components.DropdownIndicator>
  );
};

export const SelectComponent = ({ ...props }) => {
  const { options, value } = props;

  const defaultValue = (options, value) => {
    return options
      ? options.find((option) => option.value === value.value)
      : "";
  };

  return (
    <Select
      {...props}
      value={defaultValue(options, value)}
      isError={false}
      styles={customStyles}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
      }}
    />
  );
};
