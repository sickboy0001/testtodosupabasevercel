  CREATE TABLE three_good_things (
    id bigint generated by default as identity not null,
    user_id uuid null,
    cur_date date  null,
    contents text null,
    is_archived boolean null default false,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    constraint three_good_things_pkey primary key (id)
  )tablespace pg_default;



  INSERT INTO three_good_things (user_id, cur_date, contents) VALUES
  ('8ba7f858-b91b-4df9-b435-d97cb3b82e67', '2023-05-20', '今日は天気が良くて気持ちいいです。'),
  ('8ba7f858-b91b-4df9-b435-d97cb3b82e67', '2023-05-20', '新しい本を読み始めました。'),
  ('8ba7f858-b91b-4df9-b435-d97cb3b82e67', '2023-05-20', '友達と会う約束があります。'),
  ('8ba7f858-b91b-4df9-b435-d97cb3b82e67', '2023-05-19', 'Keepガッツリ整理した・・・Keepの数などを確認するすべほしいな。'),
  ('8ba7f858-b91b-4df9-b435-d97cb3b82e67', '2023-05-19', '新しいシナリオを・・楽しかったけど、これがゴールかどうかはこれから判断する。')
  ;
  


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
