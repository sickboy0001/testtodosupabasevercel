import React, { Dispatch, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import TextArea from "../Atoms/TextArea";
import Button from "../Atoms/Button";
import { addGoodThing, getAllGoodThings } from "@/bizlogic/goodthings";

type Props = {
  id: number;
  children: Text;
};
export function TGTRewriteThing(props: Props) {
  const { id, children } = props;
  const [value, setValue] = useState<any>(children);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isRewriteThing, setIsRewriteThing] = useState(false);
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
  useEffect(() => {
    if (isRewriteThing && textareaRef.current !== null) {
      // console.log("setfocus");
      textareaRef.current!.focus();
    }
  }, [isRewriteThing]);

  // function handleNewClick(): void {
  //   // event.preventDefault();
  //   // console.log("handleNewClick");
  //   setIsNewThing(true);
  // }
  // function handleMouseDown(): void {
  //   // console.log("handleMouseDown");
  //   setIsNewThing(false);
  // }

  async function handleRegistMouseDown(): Promise<void> {
    // console.log("handleRegistMouseDown");
    // console.log(`${value}-${props.userId}-${props.date}`);
    // if (value === "") return;
    // const dateInLocalTimezone =
    //   date === null
    //     ? new Date()
    //     : new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    // const result = await addGoodThing(userId, dateInLocalTimezone, value);
    // let goodthings = await getAllGoodThings(userId);
    // setValue("");
    // setGoodThings(goodthings);
    // setIsNewThing(false);
  }

  function handleBlur(): void {
    console.log("handleBlur");
    handleRegistMouseDown();
    setIsRewriteThing(false);
  }

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.nativeEvent.isComposing || e.key !== "Enter") return;
  //   if (e.key == "Enter" && e.shiftKey === true) handleRegistMouseDown();
  // };

  return (
    <div>
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
        <Button
          className={inputButtonClass}
          // handleClick={() => handleRegistClick()}
          handleMouseDown={() => handleRegistMouseDown()}
        >
          Regist
        </Button>
      </div>
    </div>
  );
}
