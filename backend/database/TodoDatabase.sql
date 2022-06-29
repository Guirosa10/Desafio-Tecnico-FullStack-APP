DROP DATABASE IF EXISTS TodoApp;

CREATE DATABASE TodoApp;

USE TodoApp;

CREATE TABLE Users (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE todos (
    todo_id INT NOT NULL,
    user_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES Users (id)
        ON DELETE CASCADE,
    PRIMARY KEY(todo_id)
)  ENGINE=INNODB;