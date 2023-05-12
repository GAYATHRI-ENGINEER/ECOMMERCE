import React from "react";
import Select from "react-select";

export default function CustomSelect( props  ) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#281d14" : "#ffffff",
    }),
    singleValue: (provided, state) => {
      const padding="10px 0"
      return { ...provided,padding};
    }
  };

  return (
    <Select
      {...props}
      isRtl = {true}
      isSearchable={false}

      styles={customStyles}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#5cb815",
          primary25: "#5cb815",
          neutral0: "#281d14",
          neutral20: "#5cb815",
          neutral50: "#5cb815",
          neutral80: "#5cb815",

          primary75: "#5cb815",
          neutral5: "#281d14",
          neutral30: "#5cb815",
          neutral60: "#5cb815",
          neutral90: "#5cb815",

          primary50: "#5cb815",
          neutral10: "#281d14",
          neutral40: "#5cb815",
          neutral70: "#5cb815"
        }
      })}
    />
  );
}
