create table person (
  id serial primary key,
  name varchar(64) not null,
  age integer not null
);

insert into person(name, age)
values ('AAA', 20),
  ('BBB', 30),
  ('CCC', 40);