CREATE TABLE todos (
  id bigint generated by default as identity not null,
  user_id uuid null,
  task text null,
  is_completed boolean null default false,
  is_archived boolean null default false,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint temptodos_pkey primary key (id)
);



CREATE TABLE todo_table_infos (
id bigint generated by default as identity not null,
user_id uuid null,
tablename text null,
target text null,
contents text null,
created_at timestamp with time zone null default now(),
updated_at timestamp with time zone null default now(),
constraint temptodos_pkey primary key (id)
);