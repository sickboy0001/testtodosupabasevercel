import React, { Dispatch, useEffect, useState } from "react";

import SubTitle from "../Atoms/SubTitle";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
import TextArea from "../Atoms/TextArea";

import { addGoodThing, getAllGoodThings } from "@/bizlogic/goodthings";

type Props = {
  userId: any;
  setGoodThings: Dispatch<any>;
};

function TGTAdd(props: Props) {
  const { userId, setGoodThings } = props;
  const [targetDate, setTargetDate] = useState<Date | null>(new Date());
  const [addTextThing, setAddTextThing] = useState("");
  // console.log(`addtextthing:${addTextThing}`);

  const handleAddClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addTextThing === "") return;
    if (userId === "") return;
    console.log(
      `handleAddClick ${addTextThing} userId:${userId} targetDate:${targetDate}`
    );
    const dateInLocalTimezone =
      targetDate === null
        ? new Date()
        : new Date(
            targetDate.getTime() - targetDate.getTimezoneOffset() * 60000
          );
    const result = await addGoodThing(
      userId,
      dateInLocalTimezone,
      addTextThing
    );
    let goodthings = await getAllGoodThings(userId);
    setGoodThings(goodthings);
    setAddTextThing("");
  };

  const inputClass = classNames(
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
  );
  return (
    <section>
      <SubTitle Title={"AddThings"} Description=""></SubTitle>
      <form onSubmit={(e) => handleAddClick(e)}>
        <div>
          <TextArea
            value={addTextThing}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setAddTextThing(event.target.value)}
          />
        </div>
        <div className="flex">
          <DatePicker
            className="p-1 border border-gray-400 rounded-md cursor-pointer"
            selected={targetDate}
            dateFormat="yyyy/MM/dd"
            onChange={(thisdate) => setTargetDate(thisdate)}
          />
          <button className={inputClass}>add</button>
        </div>
      </form>
    </section>
  );
}

export default TGTAdd;
