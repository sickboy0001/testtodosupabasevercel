import React from "react";
import classNames from "classnames";

type Props = {
  children: any;
};

function LabelThing(props: Props) {
  const { children } = props;
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
    <div className={labelClass}>
      {children}
      <div className="text-base"></div>
    </div>
  );
}

export default LabelThing;
