
CREATE DATABASE IF NOT EXISTS WEBAPP;

USE WEBAPP;

CREATE TABLE USERS (
    idauth      INT,
    username     VARCHAR(255),

    PRIMARY KEY (idauth)
);

CREATE TABLE BILLS (
    id          INT             AUTO_INCREMENT,
    title       VARCHAR(255)    NOT NULL,
    description VARCHAR(511)    NOT NULL,
    amount      DECIMAL(6, 2)   NOT NULL,
    publishOn   DATETIME        NOT NULL DEFAULT NOW(),
    publishBy   VARCHAR(255)    NOT NULL,
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
    FOREIGN KEY (idUsers) REFERENCES USERS(idauth),
    FOREIGN KEY (idBills) REFERENCES Bills(id)
);
