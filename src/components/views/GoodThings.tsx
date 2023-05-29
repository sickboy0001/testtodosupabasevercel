import React, { createContext, useEffect, useState } from "react";
import Link from "next/link";
import SubTitle from "../Atoms/SubTitle";
import { getAllGoodThings } from "@/bizlogic/goodthings";
import TGTCalendarWeek from "../Organisms/TGTCalendarWeek";
import { getUserStorage } from "@/utils/LocalStorageUser";
export const guest_user_id = process.env.NEXT_PUBLIC_GUEST_USER_ID;

function GoodThings() {
  const [goodThings, setGoodThings] = useState<any>();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getGoodThings = async () => {
      // console.log(goodThings);
      // console.log(`getGoodThings userId:${userId}`);
      const userStorage = getUserStorage();
      const this_userid = userStorage?.id ?? guest_user_id;
      // console.log(`getGoodThings this_userid:start:${this_userid}`);
      const newGoodThings = await getAllGoodThings(this_userid);
      // console.log(`getGoodThings this_userid:start:${this_userid}`);
      setUserId(this_userid);
      setGoodThings(newGoodThings);
    };

    getGoodThings();
  }, []);

  return (
    //container flex justify-between   mx-auto max-width: 100vw; bg-sky-100 py-2 px-2
    <section className="mb-2 w-full max-w-7xl mx-auto">
      {/* <p>
        UserID:{userId} Email:{userEmail}
      </p> */}
      <SubTitle Title="3GoodThings" Description="">
        <Link href="/goodthingsabout" legacyBehavior>
          <a className="px-5 py-1 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
            about
          </a>
        </Link>
      </SubTitle>
      {/* <TGTAdd userId={userId} setGoodThings={setGoodThings} /> */}
      <TGTCalendarWeek
        userId={userId}
        posts={goodThings}
        setGoodThings={setGoodThings}
      />
    </section>
  );
}

export default GoodThings;
