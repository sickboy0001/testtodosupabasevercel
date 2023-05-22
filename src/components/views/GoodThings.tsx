import React, { useEffect, useState } from "react";
import Link from "next/link";
import TGTCalendarWeek from "../templates/TGTCalendarWeek";
import SubTitle from "../parts/SubTitle";
import { getAllGoodThings } from "@/bizlogic/goodthings";
import TGTAdd from "../templates/TGTAdd";

export const database3GTId = process.env.NEXT_PUBLIC_NOTION_DATABASE_3GT_ID;
export const guest_user_id = process.env.NEXT_PUBLIC_GUEST_USER_ID;
const initialposts = [
  {
    current_date: "2023-05-23",
    contents: "Keepガッツリ整理した・・・Keepの数などを確認するすべほしいな。",
  },
  {
    current_date: "2023-05-22",
    contents:
      "新しいシナリオを・・楽しかったけど、これがゴールかどうかはこれから判断する。",
  },
  {
    current_date: "2023-05-21",
    contents:
      "Notionの講義面白かった。リンクドテーブル、ボード→サブグループなど使いこなしていないこと多数。 共有は難しいけどどうするがテーマ。Supabaseで認証できれば、有効利用可能かと。",
  },
  {
    current_date: "2023-05-20",
    contents:
      "不明点は多いけど、何とか動くレベル。ただし、最適を探せばもっと答えは出る。 しばらくはそれを目指すかな・・・順番を持つ、不要なAllReadは避ける、並び順整理、できるだけComponents・Partsを当初の指針に合うようにするなどなど",
  },
  {
    current_date: "2023-05-20",
    contents: "Keepガッツリ整理した・・・Keepの数などを確認するすべほしいな。",
  },
];

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
