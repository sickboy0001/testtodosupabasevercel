import classNames from "classnames";
import React from "react";

const moment = require("moment");

function Svg(props: any) {
  console.log(props.onClick);
  console.log(props.pathd);
  return (
    <>
      <svg
        onClick={props.onClick}
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d={props.pathd} />
      </svg>
    </>
  );
}

export default Svg;
