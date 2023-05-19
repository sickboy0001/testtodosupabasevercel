import React from "react";
const moment = require("moment");

type Props = {
  tabledatetime: string;
};

function Datetime(props: Props) {
  const { tabledatetime } = props;
  return <div>{moment(tabledatetime).format("YYYY/MM/DD hh:mm:ss")}</div>;
}

export default Datetime;
