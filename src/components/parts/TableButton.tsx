import React from "react";
const moment = require("moment");

type Props = {
  tablecaption: string;
  tableonclick: any;
};
function TableButton(props: Props) {
  const { tablecaption, tableonclick } = props;
  return (
    <div className="flex justify-stretch ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded  w-full  "
        onClick={tableonclick}
      >
        {tablecaption}
      </button>
    </div>
  );
}

export default TableButton;
