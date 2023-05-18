import React from "react";
const moment = require("moment");
import classNames from "classnames";

type Props = {
  tableid: number;
  children: string;
  onClick: (id: number, revvalue: boolean) => Promise<void>;
};
function TableButton(props: Props) {
  const { children, onClick, tableid } = props;
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
    <button className={inputClass} onClick={() => onClick(tableid, revvalue)}>
      {children}
    </button>
  );
}

export default TableButton;
