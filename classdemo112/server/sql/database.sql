/*drop database if exists otTopTen;
create database if not exists otTopTen character set utf8;
use otTopTen;

create table topTen(id integer not null primary key auto_increment, playerName
  varchar(50), playerScore Integer, dateEarned varchar(15));

insert into topTen (playerName, playerScore, dateEarned) values
  ('Chris', 300, '2018/12/5');

insert into topTen (playerName, playerScore, dateEarned) values
  ('Emily', 240, '2018/12/5');

insert into topTen (playerName, playerScore, dateEarned) values
  ('Jake', 100, '2018/12/5');

create user 'ttuser'@'localhost' identified by '12345';
grant all on otTopTen.topTen to 'ttUser'@'localhost';
