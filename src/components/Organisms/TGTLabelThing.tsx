import React, { Dispatch, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Button from "../Atoms/Button";
import { getAllGoodThings } from "@/bizlogic/goodthings";
import { updateThingGoodThing } from "@/bizlogic/goodthings";

type Props = {
  userId: Text;
  id: number;
  children: any;
  setGoodThings: Dispatch<any>;
};

function TGTLabelThing(props: Props) {
  const { userId, id, children, setGoodThings } = props;
  const [isWriteThing, setIsWriteThing] = useState<boolean>(false);
  const [value, setValue] = useState<any>(children);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
  const inputButtonClass = classNames(
    "text-black",
    "font-bold",
    "bg-teal-100",
    "hover:bg-teal-200",
    "border",
    "py-1",
    "px-2",
    "rounded-2xl",
    "w-full",
    "rounded-lg"
  );
  const textAreaClass = classNames(
    "block",
    "p-2.5",
    "w-full",
    "text-sm",
    "text-gray-900",
    "bg-gray-50",
    "rounded-lg",
    "border",
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500"
  );

  const handleEditStart = () => {
    setIsWriteThing(true);
    console.log(`handleEditStart:${children}`);
  };

  useEffect(() => {
    if (isWriteThing && textareaRef.current !== null) {
      // console.log("setfocus");
      setValue(children);
      textareaRef.current!.focus();
    }
  }, [isWriteThing]);

  async function handleRegistMouseDown(): Promise<void> {
    // console.log("handleRegistMouseDown");
    console.log(`handleRegistMouseDown${props.userId}`);

    if (value === "") return;

    await updateThingGoodThing(id, value);
    let goodthings = await getAllGoodThings(userId);
    setGoodThings(goodthings);
    setValue("");
    setIsWriteThing(false);
  }

  function handleBlur(): void {
    console.log("handleBlur");
    handleRegistMouseDown();
    setIsWriteThing(false);
  }

  return (
    <>
      {!isWriteThing ? (
        <div className={labelClass} onClick={() => handleEditStart()}>
          {children}
        </div>
      ) : (
        <div>
          <textarea
            id="textarea_message"
            rows={parseInt("3")}
            className={textAreaClass}
            placeholder="Today GoodThing Write....Entry when lost focus"
            onChange={(event) => setValue(event.target.value)}
            onBlur={() => handleBlur()}
            value={value}
            ref={textareaRef}
          ></textarea>
        </div>
      )}
    </>
  );
}

export default TGTLabelThing;
