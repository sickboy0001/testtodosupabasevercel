import React from "react";
const moment = require("moment");
import classNames from "classnames";

type Props = {
  children: string;
  handleClick: () => Promise<void>;
};
function ButtonBoolean(props: Props) {
  const { children, handleClick } = props;
  const inputClass = classNames(
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-1",
    "px-2",
    "rounded-2xl",
    "w-full",
    "rounded-lg",
    {
      "bg-red-500": children === "true",
      "bg-blue-500": children !== "true",
    },
    {
      "hover:bg-red-700": children === "true",
      "hover:bg-blue-700": children !== "true",
    }
  );
  const revvalue = children === "true" ? false : true;
  return (
    <button
      className={inputClass}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </button>
  );
}

export default ButtonBoolean;
