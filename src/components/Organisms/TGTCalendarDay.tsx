import React, { Dispatch } from "react";
import LabelDate from "../Atoms/LabelDate";
import LabelThing from "../Atoms/LabelThing";
import classNames from "classnames";
import { ButtonToThing } from "../Atoms/ButtonToThing";
import { getAllGoodThings, archivedGoodThing } from "@/bizlogic/goodthings";
import { TGTNewThing } from "./TGTNewThing";
import TGTLabelThing from "./TGTLabelThing";
const moment = require("moment");

type Props = {
  userId: any;
  date: Date;
  events: any[];
  setGoodThings: Dispatch<any>;
};

export function CalendarDay(props: Props) {
  const { userId, date, events, setGoodThings } = props;
  //handleClickChangeArchived
  const handleClickChangeArchived = async (id: number) => {
    {
      console.log(`handleClickChangeArchived:id:${id} `);
      // await toArchivedTodo(id, isToArchived);
      await archivedGoodThing(id);

      let newgoodthings = await getAllGoodThings(userId);
      setGoodThings(newgoodthings);
    }
  };

  // const handleAddClick = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (addTextThing === "") return;
  //   if (userId === "") return;
  //   console.log(
  //     `handleAddClick ${addTextThing} userId:${userId} targetDate:${targetDate}`
  //   );
  //   const result = await addGoodThing(userId, targetDate, addTextThing);
  //   let goodthings = await getAllGoodThings(userId);
  //   setGoodThings(goodthings);
  //   setAddTextThing("");
  // };

  return (
    <div key={moment(date).format("YYYYMMDD")}>
      <div>
        <div>
          <LabelDate date={date} />
          <div>
            {events.map((post, index: number) => {
              return (
                <span key={index} className="relative group">
                  {/* <button className={deleteButtonClassName}>x</button> */}
                  <ButtonToThing
                    handleClick={() => handleClickChangeArchived(post.id)}
                  >
                    x
                  </ButtonToThing>
                  <div>
                    <TGTLabelThing
                      userId={userId}
                      id={post.id}
                      setGoodThings={setGoodThings}
                    >
                      {post.contents}
                    </TGTLabelThing>
                  </div>
                </span>

                // </p>
              );
            })}
          </div>
          <TGTNewThing
            userId={userId}
            date={date}
            setGoodThings={setGoodThings}
          ></TGTNewThing>
        </div>
      </div>
    </div>
  );
}
