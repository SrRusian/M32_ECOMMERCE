DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS difficulty;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS courses;

CREATE TABLE users (
	id int auto_increment PRIMARY KEY,
	name varchar(20),
    secondName varchar(50),
    phone varchar(15),
    email varchar(320),
    pass varchar(255)
);

CREATE TABLE difficulty (
	id int auto_increment PRIMARY KEY,
    difficulty varchar(20)
);

CREATE TABLE category (
	id int auto_increment PRIMARY KEY,
    category varchar(50)
);

CREATE TABLE courses (
	id int auto_increment PRIMARY KEY,
    img varchar(255),
    alt varchar(50),
    id_difficulty int,
    rating decimal(2,1),
    name varchar(50),
    author varchar(50),
    description varchar(255),
    time smallint,
    sections smallint,
    users int,
    price float,
    id_category int,
    FOREIGN KEY (id_difficulty) REFERENCES difficulty(id),
    FOREIGN KEY (id_category) REFERENCES category(id)
);

