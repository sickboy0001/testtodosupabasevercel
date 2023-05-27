import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function TGTAdd(props: any) {
  return (
    <div>
      <textarea
        id="textarea_message"
        rows={parseInt("4")}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        onChange={props.onChange}
        value={props.value}
      ></textarea>
    </div>
  );
}

export default TGTAdd;
