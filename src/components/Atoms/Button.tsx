import React from "react";
const moment = require("moment");
import classNames from "classnames";

type Props = {
  children: string;
  className: any | null;
  handleClick?: () => Promise<void> | void;
  handleMouseDown?: () => Promise<void> | void;
};
function Button(props: Props) {
  const { children, className, handleClick, handleMouseDown } = props;

  const inputClass =
    className === null
      ? classNames(
          "hover:bg-blue-700",
          "text-white",
          "font-bold",
          "py-1",
          "px-2",
          "rounded-2xl",
          "w-full",
          "rounded-lg",
          "bg-blue-500",
          "hover:bg-blue-700"
        )
      : className;

  return (
    <button
      className={inputClass}
      onClick={() => handleClick && handleClick()}
      onMouseDown={() => handleMouseDown && handleMouseDown()}
    >
      {children}
    </button>
  );
}

export default Button;
