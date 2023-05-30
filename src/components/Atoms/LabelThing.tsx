import React, { useState } from "react";
import classNames from "classnames";
import { TGTRewriteThing } from "../Organisms/TGTRewriteThing";

type Props = {
  children: any;
  handleClick: any;
};

function LabelThing(props: Props) {
  const { children, handleClick } = props;
  const labelClass = classNames(
    "border",
    "border-gray-400",
    "rounded-lg",
    "shadow-md",
    "p-1",
    "m-0.5",
    "bg-white",
    "text-gray-600",
    "dark:text-gray-400",
    "text-left",
    "text-base"
  );

  return (
    <>
      <div className={labelClass}>{children}</div>
    </>
  );
}

export default LabelThing;
