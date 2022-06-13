
CREATE DATABASE IF NOT EXISTS WEBAPP;

USE WEBAPP;

CREATE TABLE USERS (
    id INT AUTO_INCREMENT,
    token VARCHAR(255),

    PRIMARY KEY (id)
);

CREATE TABLE BILLS (
    id          INT             AUTO_INCREMENT,
    title       VARCHAR(255)    NOT NULL,
    description VARCHAR(511)    NOT NULL,
    amount      DECIMAL(6, 2)   NOT NULL,
    publishOn   DATETIME        NOT NULL DEFAULT NOW(),
    fatura      MEDIUMBLOB,
    recido      MEDIUMBLOB,
    cPagamento  MEDIUMBLOB,

    PRIMARY KEY (id)
);

CREATE TABLE HAVE (
    idUsers     INT,
    idBills     INT,
    
    PRIMARY KEY (idUsers),
    PRIMARY KEY (idBills),
    FOREIGN KEY (idUsers) REFERENCES USERS(id),
    FOREIGN KEY (idBills) REFERENCES Bills(id)
);
