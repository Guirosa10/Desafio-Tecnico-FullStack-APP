DROP DATABASE IF EXISTS TodoApp;

CREATE DATABASE TodoApp;

USE TodoApp;

CREATE TABLE Users (
    id INT NOT NULL auto_increment,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE todos (
    todo_id INT NOT NULL auto_increment,
    user_id INT NOT NULL,
    todo VARCHAR(200) NOT NULL DEFAULT 'pendente',
    status VARCHAR(30) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES Users (id)
        ON DELETE CASCADE,
    PRIMARY KEY(todo_id)
)  ENGINE=INNODB;