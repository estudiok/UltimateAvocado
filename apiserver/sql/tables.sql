DROP DATABASE IF EXISTS proproject;
CREATE DATABASE proproject;
USE proproject;



CREATE TABLE User (
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(100),
    secondName VARCHAR(100),
    fatherLastName VARCHAR(100),
    motherLastName VARCHAR(100),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE Image (
    idImage INT PRIMARY KEY AUTO_INCREMENT,
    imagePath VARCHAR(200),
    createDate DATETIME
);

CREATE TABLE UserImage (
    idUserImage INT PRIMARY KEY AUTO_INCREMENT,
    idImage INT,
    idUser INT,
    FOREIGN KEY (idUser) REFERENCES User(idUser),
    FOREIGN KEY (idImage) REFERENCES Image(idImage)
);


