import classNames from "classnames";
import React from "react";

const moment = require("moment");

function InputLogin(props: any) {
  var thisClassName =
    props.className === undefined
      ? classNames(
          "mb-1",
          "text-xs",
          "sm:text-sm",
          "tracking-wide",
          "text-gray-600"
        )
      : props.className;

  return (
    <input
      type={props.type}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default InputLogin;
