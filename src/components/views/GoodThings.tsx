import React, { useEffect, useState } from "react";
import Link from "next/link";
import SubTitle from "../Atoms/SubTitle";
import { getAllGoodThings } from "@/bizlogic/goodthings";
import TGTAdd from "../Atoms/TextArea";
import TGTCalendarWeek from "../Organisms/TGTCalendarWeek";

export const guest_user_id = process.env.NEXT_PUBLIC_GUEST_USER_ID;

function GoodThings() {
  const [goodThings, setGoodThings] = useState<any>();
  const [userId, setUserId] = useState(guest_user_id);

  useEffect(() => {
    const this_userid = userId !== "" ? userId : guest_user_id;
    const getGoodThings = async () => {
      console.log(goodThings);
      const newGoodThings = await getAllGoodThings(this_userid);
      setGoodThings(newGoodThings);
    };
    getGoodThings();
    console.log(goodThings);
  }, [userId]);

  return (
    <section className="mb-2 text-xl w-full max-w-4xl  mx-auto">
      <SubTitle Title="3GoodThings" Description="">
        <Link href="/goodthingsabout" legacyBehavior>
          <a className="px-5 py-1 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
            about
          </a>
        </Link>
      </SubTitle>
      <TGTAdd userId={userId} setGoodThings={setGoodThings} />
      <TGTCalendarWeek
        userId={userId}
        posts={goodThings}
        setGoodThings={setGoodThings}
      />
    </section>
  );
}

export default GoodThings;
